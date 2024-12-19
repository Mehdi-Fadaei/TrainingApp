import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const UseEffectCounter = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    console.log('The text has changed!');
  }, [text]);

  useEffect(() => {
    console.log('The Component has rendered');
  }, []);

  return (
    <Text onPress={() => setText(text + 1)}>
      {text}
    </Text>
  );
};

export default UseEffectCounter;