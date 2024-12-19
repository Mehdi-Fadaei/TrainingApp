import react, { useState } from "react";
import { Text, View } from "react-native";

const UseStateText = () => {
  const [text, setText] = useState('Hello, useState');

  return (
    <View>
      <Text onPress={() => setText('Hello you just use usestate hook i chaged')}>{text}</Text>
    </View>
  );
};

export default UseStateText;