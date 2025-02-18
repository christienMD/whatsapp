import { Tabs } from "expo-router";
import {
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AppHeaderRight } from "@/components/AppHeaderRight";
import MainHeader from "@/components/MainHeader";
import MainLayoutTitle from "@/components/MainLayoutTitle";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Layout = () => {

  return (
    <GestureHandlerRootView style={styles.container}>
      <MainHeader />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.whats_bg,
            height: 84,
            paddingBottom: 4,
            paddingTop: 2,
            paddingHorizontal: Platform.OS === "ios" ? 24 : 20,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
            fontWeight: "500",
            color: Colors.white,
            marginTop: 12,
          },
          tabBarActiveBackgroundColor: "transparent",
          tabBarInactiveBackgroundColor: "transparent",
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.white,
          headerStyle: {
            backgroundColor: Colors.whats_bg,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <MainLayoutTitle />,
          headerRight: () => <AppHeaderRight />,
          tabBarItemStyle: {
            paddingVertical: 0,
            marginHorizontal: 12,
            height: 80,
            justifyContent: "center",
            paddingTop: 6,
          },
        }}
      >
        <Tabs.Screen
          name="chats"
          options={{
            title: "Chats",
            tabBarIcon: ({ focused }) => (
              <View
                style={[styles.iconContainer, focused && styles.activeIconBg]}
              >
                <MaterialCommunityIcons
                  name="message-text"
                  size={22}
                  color={Colors.white}
                />
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>99+</Text>
                </View>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            tabBarIcon: ({ focused }) => (
              <View
                style={[styles.iconContainer, focused && styles.activeIconBg]}
              >
                <MaterialCommunityIcons
                  name="phone"
                  size={22}
                  color={Colors.white}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            tabBarIcon: ({ focused }) => (
              <View
                style={[styles.iconContainer, focused && styles.activeIconBg]}
              >
                <MaterialIcons name="update" size={22} color={Colors.white} />
                <View style={styles.updateDot} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="tools"
          options={{
            title: "Tools",
            tabBarIcon: ({ focused }) => (
              <View
                style={[styles.iconContainer, focused && styles.activeIconBg]}
              >
                <MaterialCommunityIcons
                  name="tools"
                  size={22}
                  color={Colors.white}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  activeIconBg: {
    backgroundColor: "#252726",
  },
  container: {
    backgroundColor: Colors.whats_bg,
    flex: 1,
  },
  iconContainer: {
    alignItems: "center",
    borderRadius: 20,
    height: 36,
    justifyContent: "center",
    marginBottom: 4,
    width: 60,
    marginTop: 12,
  },
  unreadBadge: {
    alignItems: "center",
    backgroundColor: Colors.whats_green,
    borderRadius: 10,
    height: 18,
    justifyContent: "center",
    minWidth: 20,
    paddingHorizontal: 4,
    position: "absolute",
    right: -8,
    top: 0,
  },
  unreadText: {
    color: Colors.whats_bg,
    fontSize: 11,
    fontWeight: "600",
    includeFontPadding: false,
    textAlign: "center",
  },
  updateDot: {
    backgroundColor: Colors.whats_green,
    borderRadius: 5,
    height: 10,
    position: "absolute",
    right: 10,
    top: 5,
    width: 10,
  },
 
});

export default Layout;
