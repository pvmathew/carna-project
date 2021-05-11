import React from 'react';
import LoginScreen from './screens/LoginScreen';

function Root(props) {
  return <LoginScreen />;
}

export default Root;

// const mapStateToProps = (state) => ({
//   isLoggedIn: state.auth.isLoggedIn,
// });

// export default connect(mapStateToProps, { autoLogin })(Root);
