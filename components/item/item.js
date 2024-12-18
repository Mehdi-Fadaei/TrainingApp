import React from "react";
import { Text, View } from "react-native";

import PropTypes from "prop-types";

const Item = ({ name, price }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  )
};

Item.PropTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
export default Item;