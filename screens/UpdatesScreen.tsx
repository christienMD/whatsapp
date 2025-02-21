import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreenContainer from "@/components/AppScreenContainer";
import UpdatesScreenFloatingAction from "@/components/UpdateScreenFloatingAction";
import Colors from "@/constants/Colors";

const UpdatesScreen = () => {
  const handleCameraPress = () => {};

  const handleWriteStatusPress = () => {};

  return (
    <View style={styles.mainContainer}>
      <AppScreenContainer>
        <Text className="text-white">UpdatesScreen</Text>
      </AppScreenContainer>
      <UpdatesScreenFloatingAction
        onCameraPress={handleCameraPress}
        onWritePress={handleWriteStatusPress}
      />
    </View>
  );
};

export default UpdatesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.whats_bg,
  },
});
