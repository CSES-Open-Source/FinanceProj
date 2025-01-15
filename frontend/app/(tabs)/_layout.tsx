import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Login from "./Login"; // Import the Home component

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Login"
        component={Login}
      />
    </Tab.Navigator>
  );
}