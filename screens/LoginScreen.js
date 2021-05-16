import * as React from 'react';
import { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions';

function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Learn English.</Text>
        <Text style={styles.logoSubText}>Aw yea.</Text>
      </View>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder='Username'
        style={styles.textInput}
        autoCapitalize='none'
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        style={styles.textInput}
        secureTextEntry={true}
        autoCapitalize='none'
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          dispatch(loginUser(username, password));
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{props.err}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    justifyContent: 'center',
  },
  logoContainer: {
    fontFamily: 'SuezOne_400Regular',
    color: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    marginTop: 50,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: { height: 50, width: 50 },
  logoText: {
    fontSize: 30,
    color: '#fff',
  },
  logoSubText: {
    fontSize: 15,
    color: '#fff',
  },
  textInput: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 25,
    marginBottom: 10,
    marginRight: 25,
    backgroundColor: '#fff',
  },
  loginButton: {
    alignSelf: 'center',
    borderRadius: 10,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  loginButtonText: {
    color: '#fff',
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 5,
    marginHorizontal: 10,
  },
});

export default LoginScreen;
