/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

import ThemeContext from './components/contexs/ThemeContext';

import HomeScreen from './components/screens/HomeScreen';
//import MyText from './components/MyText/MyText';
//import Item from './components/item/item';
//import TextEventHandling from './components/eventHandling/EventHandling';
//import UseStateText from './components/hooks/UseStateHook';
//import UseEffectCounter from './components/hooks/UseEffecttext';
//import UseRefText from './components/hooks/UseRefText';

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <View style={{backgroundColor: isDarkMode ? '#ffffff' : '#222222'}}>
          <Text>Hello Word Begin</Text>
          <Button onPress={toggleTheme} title="Dark Mode Light Mode" />
        </View>
        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

export default App;
