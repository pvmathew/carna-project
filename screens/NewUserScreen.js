import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  Vibration,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addUser } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const AddScreen = (props) => {
  const dispatch = useDispatch();
  const { err, msg } = useSelector((state) => state.add);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // usertype dropdown
  const [open, setOpen] = useState(false);
  const [types, setTypes] = useState([
    { label: 'Student', value: 'student' },
    { label: 'Teacher', value: 'teacher' },
  ]);
  const [selectedType, setSelectedType] = useState('student');

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
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
        autoCapitalize='none'
        secureTextEntry={true}
      ></TextInput>
      <DropDownPicker
        containerStyle={styles.dropDownContainer}
        style={styles.dropDown}
        open={open}
        value={selectedType}
        items={types}
        setOpen={setOpen}
        setValue={setSelectedType}
        setItems={setTypes}
      />
      <TouchableOpacity
        style={styles.generateAccount}
        onPress={async () => {
          dispatch(addUser(username, selectedType, password));
        }}
      >
        <Text style={styles.generateAccountText}>Generate Account</Text>
      </TouchableOpacity>

      {err && <Text style={styles.requestStatus}>{err}</Text>}
      {msg && <Text style={styles.requestStatus}>{msg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    paddingTop: 30,
  },
  placeholder: {
    textAlign: 'center',
  },
  generateAccount: {
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
  generateAccountText: {
    color: 'white',
    paddingVertical: 8,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: '#fff',
  },
  dropDownContainer: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'lightgray',
    color: 'gray',
  },
  dropDown: {
    borderColor: 'lightgray',
  },
  requestStatus: {
    textAlign: 'center',
    marginTop: 15,
  },
});

export default AddScreen;
