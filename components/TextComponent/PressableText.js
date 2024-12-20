/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const PressableTextInput = () => {
  const [passwordValiu, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  return (
    <View>
      <TextInput
        value={passwordValiu}
        style={{ borderWidth: 1, borderRadius: 4, padding: 10 }}
        placeholder={'Put your Password hier'}
        onChangeText={value => setPasswordValue(value)}
      />
      <TextInput
        value={emailValue}
        style={{ borderWidth: 1, borderRadius: 4, padding: 10 }}
        placeholder={'Input your Email Hier'}
        keyboardType={'email-address'}
        onChangeText={value => setEmailValue(value)
        } />
      <Pressable
        style={{ backgroundColor: 'black' }}
        onPress={() => {
          console.log(emailValue, passwordValiu);
        }} />
      <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>
        Submit
      </Text>
    </View >
  );
};

export default PressableTextInput;
