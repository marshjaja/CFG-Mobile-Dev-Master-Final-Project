import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginButton from "./LoginButton";

export default function GlobalHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>CFG</Text>
      </View>
      <View style={styles.loginContainer}>
        <LoginButton navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#9336B4",
    borderRadius: 10,
    width: "100%",
  },
  textContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  LoginButton: { paddingRight: 10 },
});
