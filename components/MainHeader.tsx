import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Colors from '@/constants/Colors';
import MainLayoutTitle from '@/components/MainLayoutTitle';
import { AppHeaderRight } from '@/components/AppHeaderRight';


const MainHeader = () => {
  return (
    <View 
      className={`bg-${Colors.whats_bg}`} 
      style={{ 
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={Colors.whats_bg} />
      <View 
        className="flex-row justify-between items-center px-4" 
        style={{
          height: Platform.OS === 'ios' ? 44 : 56
        }}
      >
        <MainLayoutTitle />
        <AppHeaderRight />
      </View>
    </View>
  );
};

export default MainHeader;