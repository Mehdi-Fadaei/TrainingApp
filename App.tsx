/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import ThemeContext from './components/contexs/ThemeContext';

import HomeScreen from './components/screens/HomeScreen';
//import MyText from './components/MyText/MyText';
//import Item from './components/item/item';
//import TextEventHandling from './components/eventHandling/EventHandling';
//import UseStateText from './components/hooks/UseStateHook';
//import UseEffectCounter from './components/hooks/UseEffecttext';
//import UseRefText from './components/hooks/UseRefText';
import useToogle from './components/hooks/CustomHook';
import ClassBAseComponent from './components/classBasedComponent/ClassBaseComponent';
import style from './components/MyText/style';
import TextInputComponent from './components/TextComponent/TextInput';
import PressableTextInput from './components/TextComponent/PressableText';
import ToggelSwitch from './components/switchComponent/ToggelSwitch';

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOn, toggleIsOn] = useToogle(false);
  const [imageSource, setImageSource] = useState({uri: 'https://exampel.com'});

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <ScrollView>
          <View style={{backgroundColor: isDarkMode ? '#ffffff' : '#222222'}}>
            <Text>Hello Word Begin</Text>
            <Button onPress={toggleTheme} title="Dark Mode Light Mode" />
          </View>
          <HomeScreen />
          <Button title={'Turn on to off'} onPress={toggleIsOn} />
          <Text>{isOn ? 'on' : 'off'}</Text>
          <ClassBAseComponent />
          <Image
            source={imageSource}
            style={{width: 100, height: 100}}
            resizeMode={'repeat'} //repeat , contain(skailed same), stretch, center (in % size) are property to controll size and .. of images
            onError={() => {
              console.log('Error has been detected while loading an image');
              setImageSource(require('./assets/images/cake.png'));
            }}
          />
          <Text>Use url to bid same image</Text>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
            }}
            style={{width: 100, height: 100}}
          />
          <TextInputComponent />
          <PressableTextInput />
          <ToggelSwitch />
        </ScrollView>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

export default App;
