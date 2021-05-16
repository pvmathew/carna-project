import React from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import MainDrawer from './MainDrawer';

function Root(props) {
  const { token, type } = useSelector((state) => state.auth);

  // Only admin panel implemented for now
  if (token && type === 'admin') {
    return <MainDrawer />;
  }
  return <LoginScreen />;
}

export default Root;
