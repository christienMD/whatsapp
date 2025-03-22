import React, { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { useChatList, useArchivedCount } from "@/hooks/useChats";
import { CategoryTabName } from "@/types/index-d";
import Colors from "@/constants/Colors";
import AppScreenContainer from "@/components/AppScreenContainer";
import CategoryTabs from "@/components/CategoryTabs";
import ArchiveRow from "@/components/ArchiveRow";
import StorageFullAlert from "@/components/StorageFullAlert";
import ChatRow from "@/components/ChatRow";
import ChatScreenFloatingAction from "@/components/ChatScreenFloatingAction";

const ChatScreen = () => {
  // All hooks must be at the top level
  const [showStorageAlert, setShowStorageAlert] = useState(true);
  const [activeTab, setActiveTab] = useState<CategoryTabName>("All");
  
  // Pass the activeTab to our hook for server-side filtering
  const { data: chats, isLoading, error } = useChatList(activeTab);
  
  // Get archived count in a separate query
  const { data: archivedChatsCount = 0 } = useArchivedCount();
  
  const handleTabChange = (tabName: CategoryTabName) => {
    setActiveTab(tabName);
  };

  const handleMetaPress = () => {
    // Handle Meta logo when clicked on
  };

  const handleNewChat = () => {
    // Handle the new chat creation
  };

  const showArchiveRow = activeTab !== "Archived";

 if (isLoading) {
    return (
      <View style={styles.mainContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.errorText}>Failed to load archived chats: {error.message}</Text>
        </View>
      );
    }

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
          <ArchiveRow archivedChatsCount={archivedChatsCount} />
        )}
        <FlatList
          scrollEnabled={false}
          data={chats || []}
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
  errorText: {
    color: "red",
    textAlign: "center",
    margin: 20
  }
});