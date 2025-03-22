import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { CategoryTabName } from "@/types/index-d";

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;


interface Tab {
  name: CategoryTabName;
  icon?: string;
  color?: string;
  iconType?: "material" | "materialCommunity";
}

const tabs: Tab[] = [
  { name: "All" },
  { name: "Unread" },
  { name: "Favorites" },
  { name: "Groups" },
  {
    name: "Lead",
    icon: "circle",
    color: "#7D6EE9",
    iconType: "materialCommunity",
  },
  {
    name: "Business",
    icon: "briefcase",
    color: "#FFA726",
    iconType: "materialCommunity",
  },
  {
    name: "Archived",
    icon: "archive",
    color: "#757575",
    iconType: "materialCommunity",
  },
  {
    name: "Communities",
    icon: "account-group",
    color: "#43A047",
    iconType: "materialCommunity",
  },
  {
    name: "Broadcast",
    icon: "broadcast",
    color: "#FF5722",
    iconType: "materialCommunity",
  },
  {
    name: "Muted",
    icon: "volume-mute",
    color: "#0097A7",
    iconType: "materialCommunity",
  },
];

interface Props {
  activeTab: CategoryTabName;
  onTabChange: (tabName: CategoryTabName) => void;
}

const CategoryTabs = ({ activeTab, onTabChange }: Props) => {
  return (
    <View className="mt-3 mb-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            className={`px-6 me-2.5 py-2.5 rounded-full flex-row items-center ${
              activeTab === tab.name ? "bg-white/10" : "bg-white/5"
            }`}
            onPress={() => onTabChange(tab.name)}
          >
            {tab.icon && tab.iconType === "materialCommunity" ? (
              <MaterialCommunityIcons
                name={tab.icon as MaterialCommunityIconName}
                size={16}
                color={tab.color}
              />
            ) : (
              tab.icon && (
                <MaterialIcons
                  name={tab.icon as MaterialIconName}
                  size={16}
                  color={tab.color}
                />
              )
            )}
            <Text
              className={`text-sm ${
                activeTab === tab.name
                  ? "text-white font-bold"
                  : "text-gray-400 font-semibold"
              }`}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryTabs;