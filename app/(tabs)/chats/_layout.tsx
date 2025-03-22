import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: () => <View></View>
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerTitle: () => <View>
            
          </View>,
        }}
      />
    </Stack>
  );
};

export default Layout;
