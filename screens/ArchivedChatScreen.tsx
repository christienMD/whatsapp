import { FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import AppScreenContainer from "@/components/AppScreenContainer";
import ChatRow from "@/components/ChatRow";
import { useArchivedChats } from "@/hooks/useChats";

const ArchivedChatScreen = () => {
  const { data: archivedChats, isLoading, error } = useArchivedChats();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load archived chats: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppScreenContainer>
        <View style={styles.headerContainer}>
          <Text className="text-center text-neutral-400 text-sm">
            These chats stay archived when new messages are received. Tap to
            change
          </Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={archivedChats || []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatRow chat={item} />}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No archived chats</Text>
            </View>
          )}
        />
      </AppScreenContainer>
    </View>
  );
};

export default ArchivedChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whats_bg,
  },
  headerContainer: {
    padding: 16,
    backgroundColor: Colors.whats_bg,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#9ca3af",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    margin: 20
  }
});