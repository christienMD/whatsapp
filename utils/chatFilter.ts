import { Chat } from "@/entities";
import { CategoryTabName } from "@/types/index-d";

export const chatFilters = (
  chats: Chat[],
  activeTab: CategoryTabName
): Chat[] => {
  switch (activeTab) {
    case "All":
      return chats.filter(chat => !chat.isArchived);
    case "Unread":
      return chats.filter(chat => !chat.read && !chat.isArchived);
    case "Favorites":
      return chats.filter(chat => chat.isFavorite && !chat.isArchived);
    case "Groups":
      return chats.filter(chat => chat.isGroup && !chat.isArchived);
    case "Lead":
      return chats.filter(chat => chat.isLead && !chat.isArchived);
    case "Business":
      return chats.filter(chat => chat.isBusiness && !chat.isArchived);
    case "Archived":
      return chats.filter(chat => chat.isArchived);
    case "Communities":
      return chats.filter(chat => chat.isCommunity && !chat.isArchived);
    case "Broadcast":
      return chats.filter(chat => chat.isBroadcast && !chat.isArchived);
    case "Muted":
      return chats.filter(chat => chat.isMuted && !chat.isArchived);
    default:
      return chats.filter(chat => !chat.isArchived);
  }
};