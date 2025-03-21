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
  chat: { 
    avatar_url, 
    name, 
    id, 
    last_message, 
    last_message_time,
    unread_count,
    is_muted 
  },
}: Props) => {
  
  const isRead = !unread_count || unread_count === 0;
  
  return (
    <Link href={`/(tabs)/chats/${id}`} asChild>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={Colors.whats_bg}
        className="w-full"
      >
        <View className="flex-row items-center gap-4 py-3">
          <Image
            source={{ uri: avatar_url || 'https://placehold.co/50x50' }}
            className="w-[50px] h-[50px] rounded-full"
          />
          <View className="flex-1">
            <Text
              className={`text-lg font-bold ${
                isRead ? "text-white" : "text-white"
              }`}
            >
              {name || 'Unknown'}
            </Text>
            <Text className="text-base text-gray-400">
              {last_message && last_message.length > 20 
                ? `${last_message.substring(0, 18)}...` 
                : last_message || 'No messages yet'}
            </Text>
          </View>
          <View className="items-end self-start gap-1">
            <Text className={`${!isRead ? "text-green-500" : "text-gray-500"}`}>
              {last_message_time 
                ? format(new Date(last_message_time), "MM.dd.yy") 
                : ''}
            </Text>
            <View className="flex-row items-center">
              {is_muted && (
                <View className="mr-1">
                  <MaterialCommunityIcons
                    name="volume-mute"
                    size={25}
                    color={Colors.gray}
                  />
                </View>
              )}
              <UnreadBadge count={unread_count || 0} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Link>
  );
};

export default ChatRow;