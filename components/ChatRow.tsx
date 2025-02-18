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

interface Props {
  chat: Chat;
}

const ChatRow = ({
  chat: { img, from, id, msg, read, date, unreadCount },
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
          <Text className="text-gray-500 self-start">
            {format(new Date(date), "MM.dd.yy")}
          </Text>
        </View>
      </TouchableHighlight>
    </Link>
  );
};

export default ChatRow;
