import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screen/Home";
import { Movie } from "../../screen/Movie";

const Stack = createNativeStackNavigator();

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{ title: "Movie", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
