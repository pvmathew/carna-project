import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  Vibration,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Constants from 'expo-constants';

const AddScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <TouchableOpacity
        style={styles.viewDetail}
        onPress={async () => {
          props.navigation.navigate('NewUser');
        }}
      >
        <Ionicons
          name='ios-add'
          size={25}
          color='#fff'
          style={styles.searchIcon}
        />
        <Text style={styles.viewDetailText}>New User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewDetail}
        onPress={async () => {
          props.navigation.navigate('AdminPanel');
        }}
      >
        <Ionicons
          name='ios-add'
          size={25}
          color='#fff'
          style={styles.searchIcon}
        />
        <Text style={styles.viewDetailText}>New Group</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewDetail}
        onPress={async () => {
          props.navigation.navigate('AdminPanel');
        }}
      >
        <Ionicons
          name='ios-add'
          size={25}
          color='#fff'
          style={styles.searchIcon}
        />
        <Text style={styles.viewDetailText}>New Course</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  placeholder: {
    textAlign: 'center',
  },
  viewDetail: {
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
  viewDetailText: {
    color: 'white',
    paddingVertical: 8,
    fontWeight: 'bold'
  },
});

export default AddScreen;
