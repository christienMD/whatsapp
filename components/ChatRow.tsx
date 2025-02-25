import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { format } from "date-fns";
import { Chat } from "@/entities";
import Colors from "@/constants/Colors";
import UnreadBadge from "./UnreadBadge";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

interface Props {
  chat: Chat;
}

const ChatRow = ({
  chat: { img, from, id, msg, read, date, unreadCount, isMuted },
}: Props) => {
  return (
    <Link href={`/`} asChild>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={Colors.whats_bg}
        className="w-full"
      >
        <View className="flex-row items-center gap-4 py-3">
          <Image
            source={{ uri: img }}
            className="w-[50px] h-[50px] rounded-full"
          />
          <View className="flex-1">
            <Text
              className={`text-lg font-bold ${
                read ? "text-white" : "text-white"
              }`}
            >
              {from}
            </Text>
            <Text className="text-base text-gray-400">
              {msg.length > 20 ? `${msg.substring(0, 18)}...` : msg}
            </Text>
          </View>
          <View className="items-end self-start gap-1">
            <Text className={`${!read ? "text-green-500" : "text-gray-500"}`}>
              {format(new Date(date), "MM.dd.yy")}
            </Text>
            <View className="flex-row items-center">
              {isMuted && (
                <View className="mr-1">
                  <MaterialCommunityIcons
                    name="volume-mute"
                    size={25}
                    color={Colors.gray}
                  />
                </View>
              )}
              <UnreadBadge count={unreadCount || 0} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Link>
  );
};

export default ChatRow;
