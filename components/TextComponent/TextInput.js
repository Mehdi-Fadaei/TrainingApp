/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const TextInputComponent = () => {
  const [textValue, setTextValue] = useState('');
  const [passwordValiu, setPasswordValue] = useState('');
  return (
    <View>
      <Text>Input your username</Text>
      <TextInput style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
        value={textValue}
        onChangeText={value => {
          setTextValue(value);
        }}
        autoFocus={false}
        placeholder={'Pleas enter your Text'} />
      <Text>Input password Hier</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
        value={passwordValiu}
        onChangeText={value => {
          setPasswordValue(value);
        }}
        secureTextEntry={true}
        placeholder={'Enter Password Hier'} />
    </View>
  );
};

export default TextInputComponent;
