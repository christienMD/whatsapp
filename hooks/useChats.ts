// hooks/useChats.ts
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Chat } from '@/entities';
import { CategoryTabName } from '@/types/index-d';

export const useChatList = (categoryTab: CategoryTabName = 'All') => {
  return useQuery<Chat[], Error>({
    queryKey: ['chats', categoryTab],
    queryFn: async () => {
      let query = supabase.from('chats').select('*');
    //  const isRead = !unread_count || unread_count === 0;

      
      if (categoryTab !== 'Archived') {
        // For all non-archived tabs, we don't want archived chats
        query = query.eq('is_archived', false);
      }
      
      switch (categoryTab) {
        case 'Archived':
          query = query.eq('is_archived', true);
          break;
        case 'Unread':
            query = query.gt('unread_count', 0);
          break;
        case 'Favorites':
          query = query.eq('is_favorite', true);
          break;
        case 'Groups':
          query = query.eq('is_group', true);
          break;
        case 'Lead':
          query = query.eq('is_lead', true);
          break;
        case 'Business':
          query = query.eq('is_business', true);
          break;
        case 'Communities':
          query = query.eq('is_community', true);
          break;
        case 'Broadcast':
          query = query.eq('is_broadcast', true);
          break;
        case 'Muted':
          query = query.eq('is_muted', true);
          break;
        // If 'All' or any other tab, we've already filtered for non-archived chats
      }
      
      const { data, error } = await query;
      
      if (error) {
        throw new Error(error.message);
      }
      
      return data;
    },
  });
};

// Separate hook for just getting the archived count
export const useArchivedCount = () => {
  return useQuery<number, Error>({
    queryKey: ['chats-archived-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('chats')
        .select('*', { count: 'exact', head: true })
        .eq('is_archived', true);
      
      if (error) {
        throw new Error(error.message);
      }
      
      return count || 0;
    },
  });
};


export const useArchivedChats = () => {
    
    return useQuery({
      queryKey: ["archivedChats"],
      queryFn: async () => {
        const { data, error } = await supabase
          .from("chats")
          .select("*")
          .eq("is_archived", true)
          .order("last_message_time", { ascending: false });
          
        if (error) throw error;
        return data || [];
      }
    });
  };