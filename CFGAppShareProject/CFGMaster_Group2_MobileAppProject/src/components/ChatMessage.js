import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatMessage = ({ message, user }) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.username}>{user}</Text>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 10,
  },
  username: {
    fontWeight: "bold",
  },
});

export default ChatMessage;
