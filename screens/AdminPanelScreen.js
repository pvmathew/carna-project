import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// import { connect } from "react-redux";
// import { logoutUser, fetchFavorites, fetchTrending } from "../redux/actions";

// import TrendingItem from "../components/TrendingItem";

import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../redux/actions';
import UserList from '../components/UserList';

const AdminPanelScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <UserList showFew={true} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  placeholder: {
    textAlign: 'center',
  },
  viewDetail: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#008080',
    shadowOffset: { width: 0, height: 0 },
    alignItems: 'center',
    marginBottom: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  viewDetailText: {
    color: 'white',
    paddingVertical: 12,
  },
});

// const mapStateToProps = (state) => ({ trendingList: state.trending });

// export default connect(mapStateToProps, {
//   logoutUser,
//   fetchFavorites,
//   fetchTrending,
// })(TrendingScreen);

export default AdminPanelScreen;
