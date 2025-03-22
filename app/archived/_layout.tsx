import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import Colors from "@/constants/Colors";

export default function ArchivedLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.whats_bg },
        headerTintColor: Colors.white,
        headerTitle: "Your Custom Title",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Archived",
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: Colors.whats_bg }} />
          ),
        }}
      />
    </Stack>
  );
}
