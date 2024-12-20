/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

const ToggelSwitch = () => {
  const [toggelSwichStatus, setToggelSwichStatus] = useState(true);


  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <Switch
        value={toggelSwichStatus}
        onValueChange={(value) => setToggelSwichStatus(value)}
      />
      <Text>
        Toggel me
      </Text>
    </View>
  );

};

export default ToggelSwitch;
