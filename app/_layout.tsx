import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="otp"
        options={{
          headerTitle: "Enter Your Phone Number",
          headerBackVisible: true,
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 16 },
        }}
      />
      <Stack.Screen
        name="verify/[phone]"
        options={{
          headerTitle: "Verify Your Phone Number",
          headerBackTitle: "Edit number",
          headerTitleStyle: { fontSize: 16 },
          ...(Platform.OS === "android" && {
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 6,
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#007AFF" />
                <Text style={{ marginLeft: 3, color: "#007AFF" }}>
                  Edit number
                </Text>
              </TouchableOpacity>
            ),
          }),
        }}
      />
    </Stack>
  );
}
