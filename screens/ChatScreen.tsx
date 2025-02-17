import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { chats } from "@/assets/data/chats";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";

const ChatScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <FlatList
        scrollEnabled={false}
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatRow chat={item} />}
        ItemSeparatorComponent={() => (
          <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
        )}
      />
    </ScrollView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
