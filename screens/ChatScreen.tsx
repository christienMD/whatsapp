import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { chats } from "@/assets/data/chats";
import { defaultStyles } from "@/constants/Styles";
import ChatRow from "@/components/ChatRow";
import Colors from "@/constants/Colors";
import AppScreenContainer from "@/components/AppScreenContainer";
import CategoryTabs from "@/components/CategoryTabs";
import ArchiveRow from "@/components/ArchiveRow";
import StorageFullAlert from "@/components/StorageFullAlert";

const ChatScreen = () => {
  const [showStorageAlert, setShowStorageAlert] = useState(true);

  return (
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
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.whats_bg,
    paddingBottom: 6,
  },
});
