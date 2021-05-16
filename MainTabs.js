import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AdminPanelStack from './AdminPanelStack';
// import FavoritesStack from './FavoritesStack';

const MainTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name == 'Admin Panel') iconName = 'grid-outline';
          else iconName = 'ios-star';
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#008080',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Admin Panel' component={AdminPanelStack} />
      {/* <Tab.Screen name='Favorites' component={FavoritesStack} /> */}
    </Tab.Navigator>
  );
};

export default MainTabs;
