// libs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
// screens
import AccountScreen from "@/screens/AccountScreen";
import AccountNavigation from "@/components/Navigation/Account";
import HomeNavigation from "@/components/Navigation/Home";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarTestID: "TestId__home",
        tabBarIcon: ({ color, size }) => (
          <HomeNavigation color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarTestID: "TestId__account",
        tabBarIcon: ({ color, size }) => (
          <AccountNavigation color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
