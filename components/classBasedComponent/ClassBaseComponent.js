import React, { Component } from "react";
import { Text, View } from "react-native";

class ClassBAseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text onPress={() => {
          this.setState({ name: 'Mehdi' });
        }}>Hello, {this.state?.name} Class Base Component</Text>
      </View>
    );
  };
};

export default ClassBAseComponent;