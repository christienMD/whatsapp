import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import UnreadBadge from "./UnreadBadge";

interface Props {
  archivedChatsCount?: number;
}

const ArchiveRow = ({ archivedChatsCount = 0 }: Props) => {
  return (
    <Link href="/archived" asChild>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={Colors.whats_bg}
        className="w-full"
      >
        <View className="w-full flex-row items-center justify-between py-3">
          <View className="flex-row items-center gap-4">
            <MaterialIcons name="archive" size={24} color={Colors.white} />
            <Text className="text-lg font-bold text-white">Archived</Text>
          </View>

          {archivedChatsCount > 0 && (
            <View>
              <UnreadBadge count={archivedChatsCount} />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Link>
  );
};

export default ArchiveRow;