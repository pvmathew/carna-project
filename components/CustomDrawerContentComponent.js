import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Text } from 'react-native';
import { logoutUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <Text style={{ textAlign: 'right', marginRight: 10 }}>Hi there,</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 10,
          marginRight: 10,
          textAlign: 'right',
        }}
      >
        Admin
      </Text>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={() => dispatch(logoutUser())} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
