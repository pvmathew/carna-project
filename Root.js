import React from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import MainDrawer from './MainDrawer';

function Root(props) {
  const loginToken = useSelector((state) => state.auth.token);
  return loginToken ? <MainDrawer /> : <LoginScreen />;
}

export default Root;
