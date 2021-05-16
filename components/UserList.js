import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

const Row = ({ user, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.row, backgroundColor]}>
    <Text style={[styles.id, textColor]}>{user.user_id}</Text>
    <Text style={[styles.username, textColor]}>{user.username}</Text>
    <Text style={[styles.type, textColor]}>{user.user_type}</Text>
  </TouchableOpacity>
);

const UserList = ({ showFew }) => {
  const users = useSelector((state) => state.users);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const user = item;
    const backgroundColor = user.user_id === selectedId ? '#6e3b6e' : '#ffffff';
    const color = user.user_id === selectedId ? 'white' : 'black';

    return (
      <Row
        user={user}
        onPress={() => setSelectedId(user.user_id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userList}>User List</Text>
      <FlatList
        data={showFew ? users.slice(0, 5) : users}
        renderItem={renderItem}
        keyExtractor={(user) => user.user_id}
        extraData={selectedId}
      />
      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    margin: 10,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
  },
  userList: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  row: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  viewAll: {
    width: '90%',
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#008080',
    shadowOffset: { width: 0, height: 0 },
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 5,
  },
  viewAllText: {
    color: 'white',
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  id: {
    width: 30,
  },
  username: {
    fontSize: 15,
    flexGrow: 1,
  },
  type: {
  },
});

export default UserList;
