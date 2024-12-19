import React, { useRef } from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";

const UseRefText = () => {
  let array = Array(70).fill(0);

  const scrollViewRef = useRef(null);

  const handleClick = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} style={styles.scrollView}>
        {array.map((value, index) => (
          <Text key={index} style={styles.text}>
            Hello world {index}!
          </Text>
        ))}
      </ScrollView>
      <Button onPress={handleClick} title="Scroll To Top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollView: {
    flex: 1, // Ensure the ScrollView takes up space for scrolling
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default UseRefText;
