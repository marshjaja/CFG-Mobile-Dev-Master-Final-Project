import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as FileSystem from "expo-file-system";
import Papa from "papaparse";

const AnnouncementCard = ({ title }) => {
  const formattedTitle = title.replace(/\\n/g, "\n");
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{formattedTitle}</Text>
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
    const { width: screenWidth } = Dimensions.get("window");
    const inputRange = [
      (index - 1) * screenWidth,
      index * screenWidth,
      (index + 1) * screenWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    const cardStyle = [
      styles.cardContainer,
      {
        opacity,
        width: screenWidth,
        paddingLeft: screenWidth * 0.05,
        paddingRight: screenWidth * 0.05,
      },
    ];

    return (
      <Animated.View style={cardStyle}>
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
    backgroundColor: "#000",
  },
  cardContainer: {
    width: 400,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "105%",
    height: 800,
    backgroundColor: "#ff69b4",
    borderRadius: 20,
    padding: 50,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default AnnouncementScreen;
