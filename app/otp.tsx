import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaskInput from "react-native-mask-input";

const CAMEROON_PHONE = [
  `+`,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];

const OtpPage = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;

  const openLink = () => {
    Linking.openURL("techchantier.com");
  };

  const handleSubmit = () => {
    console.log("Submitting phone number:", phoneNumber);
    setLoading(true);
    
    // Simulate processing with a 2-second delay
    setTimeout(() => {
      setLoading(false);
      router.push(`/verify/${phoneNumber}`);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={{ fontSize: 18, padding: 10 }}>Processing...</Text>
        </View>
      )}

      <View style={styles.container}>
        <Text style={styles.description}>
          Whatsapp may need to verify your account. Carrier charges may apply
        </Text>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Cameroon</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
          </View>
          <View style={styles.separator} />

          <MaskInput
            value={phoneNumber}
            keyboardType="numeric"
            autoFocus
            placeholder="+237 6 XX XX XX XX"
            onChangeText={(masked, unmasked) => {
              setPhoneNumber(masked);
            }}
            mask={CAMEROON_PHONE}
            style={styles.input}
          />
        </View>

        <Text style={styles.legal}>
          You must be{" "}
          <Text style={styles.link} onPress={openLink}>
            at least 16 years old
          </Text>{" "}
          to register. Learn how WhatsApp works with the{" "}
          <Text style={styles.link} onPress={openLink}>
            Meta Companies
          </Text>
          .
        </Text>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            styles.button,
            phoneNumber !== "" ? styles.enabled : null,
            { marginBottom: 20 },
          ]}
          onPress={handleSubmit}
        >
          <Text
            style={[
              styles.buttonText,
              phoneNumber !== "" ? styles.enabled : null,
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.gray,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
  },
  enabled: {
    backgroundColor: Colors.primary,
    color: "#fff",
  },
  legal: {
    fontSize: 12,
    textAlign: "center",
    color: "#000",
  },
  link: {
    color: Colors.primary,
  },
  list: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    marginBottom: 10,
  },
  listItemText: {
    fontSize: 18,
    color: Colors.primary,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.gray,
    opacity: 0.2,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
    padding: 6,
    marginTop: 10,
  },
  loading: {
    zIndex: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});