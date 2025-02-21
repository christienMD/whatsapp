import { View, StyleSheet } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const FloatingActionWrapper = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default FloatingActionWrapper;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    bottom: 10,
    zIndex: 100,
  },
});
