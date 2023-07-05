import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Curriculum({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ marginTop: 20 }}>
      <View style={styles.videoModule}>
        <Text style={styles.text}>Introduction to React Native</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"ur6I5m2nTvk"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoModule}>
        <Text style={styles.text}>Setting up with Expo</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"pflXnUNMsNk"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoModule}>
        <Text style={styles.text}>View, Text & Style</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"_YydVvnjNFE"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoModule}>
        <Text style={styles.text}>Using State</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"1FiIYaRr148"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoModule}>
        <Text style={styles.text}>Text Inputs</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"c9Sg9jDitm8"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoModule}>
        <Text style={styles.text}>Lists and ScrollView</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"W-pg1r6-T0g"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.videoModule}>
        <Text style={styles.text}>Flat List Components</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"iMCM1NceGJY"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.videoModule}>
        <Text style={styles.text}>Touchable Components</Text>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={250} videoId={"QhX25YGf8qg"} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.buttonText}>Link</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  videoModule: {
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  videoContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#9336B4",
    paddingVertical: 12,
    borderRadius: 6,
    width: "30%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
