import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { chats } from "@/assets/data/chats";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";
import Colors from "@/constants/Colors";
import AppScreenContainer from "@/components/AppScreenContainer";

const ChatScreen = () => {
  return (
    <AppScreenContainer>
      <FlatList
        scrollEnabled={false}
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatRow chat={item} />}
      />
    </AppScreenContainer>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
