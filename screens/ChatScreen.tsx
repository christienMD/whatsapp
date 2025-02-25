import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useMemo } from "react";
import { chats } from "@/assets/data/chats";
import Colors from "@/constants/Colors";
import AppScreenContainer from "@/components/AppScreenContainer";
import CategoryTabs from "@/components/CategoryTabs";
import ArchiveRow from "@/components/ArchiveRow";
import StorageFullAlert from "@/components/StorageFullAlert";
import ChatRow from "@/components/ChatRow";
import ChatScreenFloatingAction from "@/components/ChatScreenFloatingAction";
import { CategoryTabName } from "@/types/index-d";
import { chatFilters } from "@/utils/chatFilter";

const ChatScreen = () => {
  const [showStorageAlert, setShowStorageAlert] = useState(true);
  const [activeTab, setActiveTab] = useState<CategoryTabName>("All");

  const filteredChats = useMemo(() => {
    return chatFilters(chats, activeTab);
  }, [activeTab]);

  const archivedChatsCount = useMemo(() => {
    return chats.filter(chat => chat.isArchived).length;
  }, []);

  const handleTabChange = (tabName: CategoryTabName) => {
    setActiveTab(tabName);
  };

  const handleMetaPress = () => {
    // Handle Meta logo
  };

  const handleNewChat = () => {
    // Handle new chat creation
  };

  const showArchiveRow = activeTab !== "Archived";

  return (
    <View style={styles.mainContainer}>
      <AppScreenContainer>
        <View style={styles.headerContainer}>
          {showStorageAlert && (
            <StorageFullAlert onClose={() => setShowStorageAlert(false)} />
          )}
        </View>
        <CategoryTabs activeTab={activeTab} onTabChange={handleTabChange} />
        {showArchiveRow && (
          <ArchiveRow
            archivedChatsCount={archivedChatsCount}
          />
        )}
        <FlatList
          scrollEnabled={false}
          data={filteredChats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow chat={item} />}
          ListEmptyComponent={() => (
            <View className="flex-1 justify-center items-center py-10">
              <Text className="text-gray-400 text-lg">No chats found</Text>
            </View>
          )}
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
