import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Hinhanh from "../assets/favicon.png";
export default function Demo001(props) {
  const { print } = props;
  return (
    <View>
      <Text>{print.name}</Text>
      <Image style={style.phan1} source={Hinhanh}></Image>
    </View>
  );
}

const style = StyleSheet.create({
  phan1: {
    height: 70,
    width: 70,
  },
});
