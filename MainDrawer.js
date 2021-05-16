import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawerContentComponent';

import MainTabs from './MainTabs';
const Drawer = createDrawerNavigator();

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export default function MainDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          width: 240,
        }}
        drawerContentOptions={{ activeTintColor: '#008080' }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name='Home' component={MainTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
