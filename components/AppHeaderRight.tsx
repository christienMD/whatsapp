import React from "react";
import { View } from "react-native";
import { usePathname, useRouter } from "expo-router";

import { HeaderIconButton } from "./HeaderIconButton";

export const AppHeaderRight = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChatSearch = () => {};

  const handleNewChat = () => {};

  const handleNewCall = () => {};

  const handleNewStatus = () => {};

  const renderActions = () => {
    switch (pathname) {
      case "/chats":
        return (
          <>
            <HeaderIconButton
              iconName="camera-alt"
              onPress={() => {}}
              type="material"
            />
            <HeaderIconButton
              iconName="search"
              onPress={handleChatSearch}
              type="material"
            />
            <HeaderIconButton
              iconName="more-vert"
              onPress={() => {}}
              type="material"
            />
          </>
        );

      case "/updates":
        return (
          <>
            <HeaderIconButton
              iconName="search"
              onPress={handleChatSearch}
              type="material"
            />
            <HeaderIconButton
              iconName="more-vert"
              onPress={() => {}}
              type="material"
            />
          </>
        );

      case "/calls":
        return (
          <>
            <HeaderIconButton
              iconName="search"
              onPress={handleChatSearch}
              type="material"
            />
            <HeaderIconButton
              iconName="more-vert"
              onPress={() => {}}
              type="material"
            />
          </>
        );

      case "/tools":
        return (
          <>
            <HeaderIconButton
              iconName="camera-alt"
              onPress={() => {}}
              type="material"
            />
            <HeaderIconButton
              iconName="more-vert"
              onPress={() => {}}
              type="material"
            />
          </>
        );

      default:
        return null;
    }
  };

  return <View className="flex-row items-center">{renderActions()}</View>;
};
