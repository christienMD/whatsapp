import { supabase } from '@/lib/supabase';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


export const useMessageList = () => {
  return useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      const { data, error } = await supabase.from('chats').select('*');
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};