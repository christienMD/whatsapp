import React from "react";
import { Text } from "react-native";
import { usePathname } from "expo-router";

interface Props {
  defaultTitle?: string;
}

const MainLayoutTitle = ({ defaultTitle = "WhatsApp" }: Props) => {
  const pathname = usePathname();

  const getTitle = () => {
    switch (pathname) {
      case "/chats":
        return "WhatsApp";
      case "/updates":
        return "Updates";
      case "/calls":
        return "Calls";
      case "/tools":
        return "Tools";
      default:
        return defaultTitle;
    }
  };

  return <Text className="text-2xl font-semibold p-2">{getTitle()}</Text>;
};

export default MainLayoutTitle;
