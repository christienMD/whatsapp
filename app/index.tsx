import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const App = () => {
  const openLink = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/welcome.png")}
        style={styles.welcome}
      />
      <Text style={styles.headline}>Welcome to Whatsapp by md christien</Text>
      <Text style={styles.description}>
        Read our{" "}
        <Text style={styles.link} onPress={openLink}>
          Privacy Policy
        </Text>
        . {'Tap "Agree & Continue" to accept the '}
        <Text style={styles.link} onPress={openLink}>
          Terms of Service
        </Text>
        .
      </Text>
      <Link href={"/otp"} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 22,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    color: Colors.gray,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  welcome: {
    width: "100%",
    height: 300,
    borderRadius: 60,
    marginBottom: 80,
  },
  link: {
    color: Colors.primary,
  },
});
