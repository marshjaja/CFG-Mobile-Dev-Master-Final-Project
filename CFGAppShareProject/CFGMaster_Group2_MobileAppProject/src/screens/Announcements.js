import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import * as FileSystem from "expo-file-system";
import Papa from "papaparse";

const AnnouncementCard = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const AnnouncementScreen = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    // Read and parse the CSV file
    const readCSVFile = async () => {
      try {
        const data = require("./../../assets/announcements.json");
        setAnnouncements(data);
        // console.log(data);
      } catch (error) {
        console.error("Error reading the CSV file:", error);
      }
    };

    readCSVFile();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnnouncementIndex(
        (prevIndex) => (prevIndex + 1) % announcements.length
      );
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [announcements]);

  const renderItem = ({ item, index }) => {
    const inputRange = [(index - 1) * 300, index * 300, (index + 1) * 300];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    return (
      <Animated.View style={[styles.cardContainer, { opacity }]}>
        <AnnouncementCard title={item.title} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={announcements}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    height: 200,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AnnouncementScreen;
