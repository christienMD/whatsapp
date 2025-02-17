export interface Chat {
    id: string;
    from: string;
    date: string;
    img: string;
    msg: string;
    read: boolean;
    unreadCount: number;
  }

export type UserId = 0 | 1;

export interface Message {
  id: string;
  from: UserId;
  date: string;
  msg: string;
  img?: string;
}