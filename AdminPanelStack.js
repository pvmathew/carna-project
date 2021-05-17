import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderBackButton } from '@react-navigation/stack';

import AdminPanelScreen from './screens/AdminPanelScreen';
import AddScreen from './screens/AddScreen';
import NewUserScreen from './screens/NewUserScreen';
import AllUsersScreen from './screens/AllUsersScreen';
import { useDispatch } from 'react-redux';
import { clearAddMsg } from './redux/actions';
// import TrendingScreen from './screens/TrendingScreen';
// import SearchScreen from './screens/SearchScreen';
// import RecipeScreen from './screens/RecipeScreen';
// import TrendingDetailScreen from './screens/TrendingDetailScreen';

const Stack = createStackNavigator();

const AdminPanelStack = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName='AdminPanel'>
      <Stack.Screen
        name='AdminPanel'
        component={AdminPanelScreen}
        options={{
          title: 'Admin Panel',
          headerStyle: {
            backgroundColor: '#008080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Add')}>
              <Ionicons
                name='ios-add'
                size={25}
                color='#fff'
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                name='md-menu'
                size={25}
                color='#fff'
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name='Add'
        component={AddScreen}
        options={{
          title: 'Add New Entry',
          headerStyle: {
            backgroundColor: '#008080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='NewUser'
        component={NewUserScreen}
        options={{
          title: 'Add New User',
          headerStyle: {
            backgroundColor: '#008080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => {
            return (
              <HeaderBackButton
                tintColor='#fff'
                onPress={() => {
                  dispatch(clearAddMsg());
                  navigation.goBack();
                }}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name='AllUsers'
        component={AllUsersScreen}
        options={{
          title: 'All Users',
          headerStyle: {
            backgroundColor: '#008080',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      {/*

    <Stack.Screen
      name='Recipe'
      component={RecipeScreen}
      options={{
        headerStyle: {
          backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 15,
  },
  menuIcon: {
    marginLeft: 15,
  },
});

export default AdminPanelStack;
