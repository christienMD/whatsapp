import { Tabs, useSegments, useNavigation } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";


import Colors from "@/constants/Colors";
import MainLayoutTitle from "@/components/MainLayoutTitle";
import { AppHeaderRight } from "@/components/AppHeaderRight";


const Layout = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.background,
          },
          tabBarActiveBackgroundColor: Colors.background,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveBackgroundColor: Colors.background,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <MainLayoutTitle />,
          headerRight: () => <AppHeaderRight />,
        }}
      >
        {/* Chats Tab */}
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="message-text"
                size={size}
                color={color}
              />
            ),
          }}
        />

        {/* Calls Tab */}
        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="phone" size={size} color={color} />
            ),
          }}
        />

        {/* Updates Tab */}
        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="update" size={size} color={color} />
            ),
          }}
        />

        {/* Tools Tab */}
        <Tabs.Screen
          name="tools"
          options={{
            title: "Tools",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="tools" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
