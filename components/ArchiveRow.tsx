import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, TouchableHighlight } from "react-native";

const ArchiveRow = () => {
  return (
    <Link href="/archived" asChild>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={Colors.whats_bg}
        className="w-full"
      >
        <View className="flex-row items-center gap-4 px-4 py-3">
          <MaterialIcons name="archive" size={24} color={Colors.white} />

          <View className="flex-1">
            <Text className="text-lg font-bold text-white">Archived</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Link>
  );
};

export default ArchiveRow;
