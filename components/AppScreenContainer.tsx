import {
  View,
  Text,
  ScrollView,
  ViewStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const AppScreenContainer = ({ className, children, style }: Props) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      className={`px-4 ${className}`}
      style={[styles.container, style]}
    >
      {children}
    </ScrollView>
  );
};

export default AppScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whats_bg,
  },
});
