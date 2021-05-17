import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../redux/actions';
import UserList from '../components/UserList';

const AdminPanelScreen = (props) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const users = useSelector((state) => state.users);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    setRefreshing(false);
  }, [users]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.userListPanel}>
        <Text style={styles.userList}>User List</Text>
        <UserList showFew={true} />
        <TouchableOpacity
          style={styles.viewAllUsers}
          onPress={async () => {
            props.navigation.navigate('AllUsers');
          }}
        >
          <Text style={styles.viewAllUsersText}>View All Users</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    paddingTop: 20,
  },
  placeholder: {
    textAlign: 'center',
  },
  userList: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewAllUsers: {
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#008080',
    shadowOffset: { width: 0, height: 0 },
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 5,
  },
  viewAllUsersText: {
    color: 'white',
    paddingVertical: 8,
    fontWeight: 'bold',
  },
});

export default AdminPanelScreen;
