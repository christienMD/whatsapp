import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const MainLayoutHeaderRight = () => {
  return (
    <View className="px-3">
      <TouchableOpacity className="flex flex-row gap-6">
        {/* Camera Icon */}
        <MaterialCommunityIcons
          name="camera-outline"
          color={Colors.primary}
          size={30}
        />

        {/* Search Icon */}
        <MaterialIcons
          name="search"
          color={Colors.primary}
          size={30}
        />

        {/* More Icon */}
        <MaterialIcons
          name="more-vert"
          color={Colors.primary}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MainLayoutHeaderRight;