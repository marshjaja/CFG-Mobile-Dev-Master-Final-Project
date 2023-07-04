import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Curriculum({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ marginTop: 50 }}>
      <Text
        style={{ fontSize: 40, justifyContent: "center", fontWeight: "bold" }}
      >
        Curriculum
      </Text>
      <Text style={{ fontSize: 20 }}>Introduction to React Native</Text>
      <YoutubePlayer height={300} videoId={"ur6I5m2nTvk"} />
      <Button
        title="Link"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <Text style={{ fontSize: 20 }}>Setting up with Expo</Text>
      <YoutubePlayer height={300} videoId={"pflXnUNMsNk"} />
      <Button
        title="Link"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <Text style={{ fontSize: 20 }}>View, Text & Style</Text>
      <YoutubePlayer height={300} videoId={"_YydVvnjNFE"} />
      <Button
        title="Link"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <Text style={{ fontSize: 20 }}>Using State</Text>
      <YoutubePlayer height={300} videoId={"1FiIYaRr148"} />
      <Text style={{ fontSize: 20 }}>Text Inputs</Text>
      <YoutubePlayer height={300} videoId={"c9Sg9jDitm8"} />
      <Button
        title="Link"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <Text style={{ fontSize: 20 }}>Lists and ScrollView</Text>
      <YoutubePlayer height={300} videoId={"W-pg1r6-T0g"} />
      <Text style={{ fontSize: 20 }}>Flat List Components</Text>
      <YoutubePlayer height={300} videoId={"iMCM1NceGJY"} />
      <Button
        title="Link"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
      <Text style={{ fontSize: 20 }}>Touchable Components</Text>
      <YoutubePlayer height={300} videoId={"QhX25YGf8qg"} />
      <Button
        title="Link"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />
    </ScrollView>
  );
}
