import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { DataTable } from 'react-native-paper';

const UserList = (props) => {
  const users = useSelector((state) => state.users);
  const [sortDescending, setSortDescending] = React.useState(true);

  const sortedUsers = users.sort((a, b) =>
    (sortDescending ? a.user_id < b.user_id : b.user_id < a.user_id) ? 1 : -1
  );

  const renderRow = (user) => {
    let dateCreated = new Date(user.date_created);
    return (
      <DataTable.Row>
        <DataTable.Cell>{user.username}</DataTable.Cell>
        <DataTable.Cell>{user.user_type}</DataTable.Cell>
        <DataTable.Cell>
          {dateCreated.toLocaleDateString('en-US')}
        </DataTable.Cell>
        <DataTable.Cell numeric>{user.user_id}</DataTable.Cell>
      </DataTable.Row>
    );
  };

  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Username</DataTable.Title>
          <DataTable.Title>Type</DataTable.Title>
          <DataTable.Title>Date Created</DataTable.Title>
          <DataTable.Title
            numeric
            sortDirection={sortDescending ? 'descending' : 'ascending'}
            onPress={() => setSortDescending(!sortDescending)}
          >
            ID
          </DataTable.Title>
        </DataTable.Header>
        {sortedUsers.map((user) => renderRow(user))}
      </DataTable>
    </>
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
  header: {},
  row: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  id: {
    width: 30,
  },
  username: {
    fontSize: 15,
    flexGrow: 1,
  },
  type: {},
});

export default UserList;
