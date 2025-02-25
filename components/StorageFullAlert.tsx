import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const StorageFullAlert = ({ onClose }: { onClose: () => void }) => {
  return (
    <View
      className={`bg-[#0A332C] flex-row items-center py-2.5 px-4 rounded-xl mt-4`}
    >
      <View className="mr-3">
        <MaterialCommunityIcons name="cloud-upload-outline" size={25} color={Colors.green} />
      </View>
      <View className="flex-1">
        <Text className="text-white text-sm font-normal mb-0.5 leading-[18px]">
          Your Google storage is over 70% full. Make sure you have enough
          storage for backups.
        </Text>
        <TouchableOpacity onPress={() => console.log("Check now pressed")}>
          <Text
            className={`text-blue-400 text-sm font-medium mt-0.5`}
          >
            Check now
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="p-1" onPress={onClose}>
        <MaterialIcons name="close" size={20} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default StorageFullAlert;
