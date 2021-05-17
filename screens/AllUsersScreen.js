import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import UserList from '../components/UserList';

const AddScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <UserList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
});

export default AddScreen;
