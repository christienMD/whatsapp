import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { chats } from "@/assets/data/chats";
import Colors from "@/constants/Colors";
import AppScreenContainer from "@/components/AppScreenContainer";
import CategoryTabs from "@/components/CategoryTabs";
import ArchiveRow from "@/components/ArchiveRow";
import StorageFullAlert from "@/components/StorageFullAlert";
import ChatRow from "@/components/ChatRow";
import ChatScreenFloatingAction from "@/components/ChatScreenFloatingAction";

const ChatScreen = () => {
  const [showStorageAlert, setShowStorageAlert] = useState(true);

  const handleMetaPress = () => {
    // Handle Meta logo
  };

  const handleNewChat = () => {
    // Handle new chat creation
  };

  return (
    <View style={styles.mainContainer}>
      <AppScreenContainer>
        <View style={styles.headerContainer}>
          {showStorageAlert && (
            <StorageFullAlert onClose={() => setShowStorageAlert(false)} />
          )}
        </View>
        <CategoryTabs />
        <ArchiveRow />
        <FlatList
          scrollEnabled={false}
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow chat={item} />}
        />
      </AppScreenContainer>
      <ChatScreenFloatingAction
        onMetaPress={handleMetaPress}
        onChatPress={handleNewChat}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.whats_bg,
  },
  headerContainer: {
    backgroundColor: Colors.whats_bg,
    paddingBottom: 6,
  },
});
