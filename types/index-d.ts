import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
export type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;

export type CategoryTabName = 
  | "All" 
  | "Unread" 
  | "Favorites" 
  | "Groups" 
  | "Lead" 
  | "Business" 
  | "Archived" 
  | "Communities" 
  | "Broadcast" 
  | "Muted";