import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Demo001 from "./components/Demo001";

export default function App() {
  const [demo001, setDemo001] = useState([
    { id: 1, name: "demo001" },
    { id: 2, name: "demo002" },
    { id: 3, name: "demo003" },
    { id: 4, name: "demo004" },
    { id: 5, name: "demo005" },
    { id: 6, name: "demo006" },
    { id: 7, name: "demo007" },
    { id: 8, name: "demo008" },
  ]);

  return (
    <View>
      <Text>Open up to start fewgr working on your app!</Text>
      <View>
        <FlatList
          data={demo001}
          renderItem={({ item }) => <Demo001 print={item}></Demo001>}
          keyExtractor={(item) => "${item.id}"}
        ></FlatList>
      </View>
    </View>
  );
}
