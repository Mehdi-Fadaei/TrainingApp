import React from "react";
import { Alert, Text } from "react-native";

import style from "../MyText/style";

const TextEventHandling = () => {

  const handelTextClick = () => {
    Alert.alert('The text has been clicked!');
  };

  return (
    <Text
      style={{ color: 'red' }}
      onPress={() => handelTextClick()}>
      Hello just click me
    </Text>
  );
};

export default TextEventHandling;