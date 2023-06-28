import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottonTabNavigator } from "@react-navigation/bottom-tabs";
import Announcements from "./src/screens/Announcements.js";
import CalendarScreen from "./src/screens/CalendarScreen.js";
import ChatScreen from "./src/screens/ChatScreen.js";
import Curriculum from "./src/screens/Curriculum.js";
import LoginScreen from "./src/screens/LoginScreen.js";
import ResultsScreen from "./src/screens/ResultsScreen.js";
import { Tab } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottonTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Announcements") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Curriculum") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Login") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Results") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Announcements" component={Announcements} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Curriculum" component={Curriculum} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="ResultsScreen" component={ResultsScreen} />
      </Tab.navigator>
    </NavigationContainer>
  );
}
