/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

//import MyText from './components/MyText/MyText';
//import Item from './components/item/item';
import TextEventHandling from './components/eventHandling/EventHandling';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <TextEventHandling />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
