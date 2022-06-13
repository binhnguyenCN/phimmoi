// libs
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// screens
import HomeScreen from "@/screens/HomeScreen";
import MovieDetailsScreen from "@/screens/MovieDetailScreen";
import WatchMovieScreen from "@/screens/WatchMovieScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "card", headerShown: false }}>
    <Stack.Screen
      name="Listing"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    <Stack.Screen name="WatchMovie" component={WatchMovieScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
