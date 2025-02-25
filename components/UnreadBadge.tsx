import { View, Text } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

interface UnreadBadgeProps {
  count: number;
}

const UnreadBadge = ({ count }: UnreadBadgeProps) => {
  if (count <= 0) return null;

  return (
    <View
      className={`bg-${Colors.whats_green} rounded-full justify-center items-center min-w-7 h-7 px-1.5 
      }`}
      style={{ backgroundColor: Colors.whats_green || "#25D366" }}
    >
      <Text className="text-black text-xs font-bold">
        {count > 99 ? "99+" : count}
      </Text>
    </View>
  );
};

export default UnreadBadge;
