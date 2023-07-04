import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Announcements from "./src/screens/Announcements.js";
import CalendarScreen from "./src/screens/CalendarScreen.tsx";
import ChatScreen from "./src/screens/ChatScreen.js";
import Curriculum from "./src/screens/Curriculum.js";
import LoginScreen from "./src/screens/LoginScreen.tsx";
import ResultsScreen from "./src/screens/ResultsScreen.js";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Announcements") {
            iconName = focused ? "ios-alarm" : "ios-alarm-outline";
          } else if (route.name === "Calendar") {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles-outline";
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
      <Tab.Screen
        name="Announcements"
        component={Announcements}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Curriculum"
        component={Curriculum}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Results"
        component={ResultsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Announcements"
          component={Announcements}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CFG"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
