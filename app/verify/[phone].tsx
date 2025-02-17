import Colors from "@/constants/Colors";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

const Page = () => {
  const { phone } = useLocalSearchParams<{ phone: string }>();
  const [code, setCode] = useState("");
  const router = useRouter();

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  useEffect(() => {
    if (code.length === 6) {
      console.log("Verifying code:", code);
      setTimeout(() => {
        if (code === "123456") {
          console.log("Verification successful");
          router.replace("/(tabs)/chats");
        } else {
          Alert.alert("Error", "Invalid verification code. Please try again.");
          setCode("");
        }
      }, 1000);
    }
  }, [code]);

  const resendCode = () => {
    console.log("Resending code to:", phone);
    Alert.alert("Success", "A new verification code has been sent.");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: phone }} />
      <Text style={styles.legal}>
        We have sent you an SMS with a code to the number above.
      </Text>
      <Text style={styles.legal}>
        To complete your phone number verification, please enter the 6-digit
        activation code.
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={resendCode}>
        <Text style={styles.buttonText}>
          Didn't receive a verification code?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex-row items-center inline-flex"
      >
        <Text style={{ color: Colors.primary }}>Edit number</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: Colors.primary,
    // fontSize: 18,
  },
  cellRoot: {
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  cellText: {
    color: "#000",
    fontSize: 24,
    textAlign: "center",
  },
  codeFieldRoot: {
    gap: 4,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    width: 260,
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.background,
    flex: 1,
    gap: 20,
    padding: 20,
  },
  focusCell: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  legal: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Page;
