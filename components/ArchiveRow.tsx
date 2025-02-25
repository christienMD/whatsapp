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
        <View className="w-full flex-row items-center justify-between pe-6">
          <View className="flex-row items-center gap-4 px-4 py-3">
            <MaterialIcons name="archive" size={24} color={Colors.white} />

            <View className="flex-1">
              <Text className="text-lg font-bold text-white">Archived</Text>
            </View>
          </View>

          {archivedChatsCount > 0 && (
            <Text style={styles.countText} className="text-gray-400 w-full">
              <UnreadBadge count={archivedChatsCount} />
            </Text>
          )}
        </View>
      </TouchableHighlight>
    </Link>
  );
};

const styles = StyleSheet.create({
  countText: {
    marginRight: 8,
    fontSize: 12
  },
});

export default ArchiveRow;
