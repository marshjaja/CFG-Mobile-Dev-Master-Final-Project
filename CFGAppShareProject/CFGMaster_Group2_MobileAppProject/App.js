import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Announcements from "./src/screens/Announcements.js";
import CalendarScreen from "./src/screens/CalendarScreen.js";
import ChatScreen from "./src/screens/ChatScreen.js";
import Curriculum from "./src/screens/Curriculum.js";
import LoginScreen from "./src/screens/LoginScreen.js";
import ResultsScreen from "./src/screens/ResultsScreen.js";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Announcements") {
              iconName = focused ? "ios-alarm" : "ios-alarm-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "ios-calendar" : "ios-calendar-outline";
            } else if (route.name === "Chat") {
              iconName = focused
                ? "ios-chatbubbles"
                : "ios-chatbubbles-outline";
            } else if (route.name === "Curriculum") {
              iconName = focused ? "ios-attach" : "ios-attach-outline";
            } else if (route.name === "Results") {
              iconName = focused ? "ios-analytics" : "ios-analytics-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ff69b4",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Announcements" component={Announcements} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Curriculum" component={Curriculum} />
        <Tab.Screen name="Results" component={ResultsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
