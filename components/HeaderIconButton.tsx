import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;

interface HeaderIconButtonProps {
  iconName: MaterialIconName | MaterialCommunityIconName;
  size?: number;
  onPress: () => void;
  type?: "material" | "community";
}

export const HeaderIconButton = ({ 
  iconName, 
  size = 24, 
  onPress,
  type = "material" 
}: HeaderIconButtonProps) => {
  if (type === "material") {
    return (
      <TouchableOpacity onPress={onPress} className="px-2">
        <MaterialIcons 
          name={iconName as MaterialIconName} 
          size={size} 
          color={Colors.primary} 
        />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} className="px-2">
      <MaterialCommunityIcons 
        name={iconName as MaterialCommunityIconName} 
        size={size} 
        color={Colors.primary} 
      />
    </TouchableOpacity>
  );
};