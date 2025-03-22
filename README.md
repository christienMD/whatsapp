# WhatsApp Clone

A pixel-perfect WhatsApp UI clone built with React Native and Expo, connected to a Supabase backend. This project recreates the familiar WhatsApp experience with a focus on UI accuracy and responsiveness across different devices.

## Overview

This WhatsApp clone project started as a weekend challenge to test my React Native skills and evolved into a comprehensive UI study. I wanted to recreate the familiar WhatsApp interface with attention to detail - from the distinctive green accents to the subtle animations that make the app feel responsive.

By connecting it to Supabase, I've created a foundation that could be extended with real-time functionality in the future, but the current focus is on delivering a polished, responsive UI that closely mirrors the original WhatsApp experience.

## Screenshots

<div align="center">
  <img src="assets/images/s1.png" alt="Welcome" width="300" />
  <img src="assets/images/s2.png" alt="Chat List Screen" width="300" />
  <img src="assets/images/s3.png" alt="Chat List Screen" width="300" />
</div>


## UI Implementations

- **Chat List Screen**: Complete with unread badges, timestamps, and mute indicators
- **Chat Categories**: Filter between All, Unread, Groups, Favorites, etc.
- **Archived Chats**: Separate section for archived conversations
- **Conversation Interface**: Message bubbles with delivery status indicators
- **Status View**: Stories/status view with circular thumbnails
- **Settings Screen**: Complete settings interface with profile editing
- **Dark Mode Support**: Full dark mode implementation
- **Responsive Design**: Adapts to different screen sizes

## Tech Stack

- **Frontend**: React Native, Expo Router
- **UI Design**: NativeWind (TailwindCSS for React Native)
- **State Management**: React Query
- **Database**: Supabase (PostgreSQL)
- **Navigation**: Expo Router (File-based navigation)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Expo CLI
- Supabase account

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/yourusername/whatsapp-clone.git
   cd whatsapp-clone
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server
   ```bash
   npx expo start
   ```

## Database Schema

The app uses the following schema in Supabase:

### Chats Table
- `id`: string (UUID, primary key)
- `name`: string (chat name)
- `avatar_url`: string (profile image URL)
- `last_message`: string (most recent message content)
- `last_message_time`: timestamp
- `unread_count`: number
- `is_archived`: boolean
- `is_muted`: boolean
- `is_favorite`: boolean
- `is_group`: boolean
- `is_business`: boolean
- `is_community`: boolean
- `is_broadcast`: boolean
- `is_lead`: boolean
- `created_at`: timestamp
- `updated_at`: timestamp

## Future Enhancements

While the current focus is on UI, future plans include:
- Implementing real-time messaging
- Adding media sharing capabilities
- Creating group chat functionality
- Building user authentication flow
- Adding push notifications

## Contributing

Contributions are welcome! Whether you want to improve the UI accuracy or start building some of the planned features, feel free to open issues or submit PRs.


## Acknowledgments

- Design inspiration from WhatsApp
- Built as a learning project for React Native, Expo, and Supabase