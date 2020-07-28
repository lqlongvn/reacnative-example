import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

const DATA = [
  {
    id: "1",
    authorAvatart: 'First Item',
    authorName:'5.min.craft',
    image:require ('../assets/instagram/img1.jpg'),
    isLinked: true,
    viewCount: 600357,
  },
  {
    id: "2",
    authorAvatart: 'First Item',
    authorName:'5.min.craft',
    image:require ('../assets/instagram/img1.jpg'),
    isLinked: true,
    viewCount: 600357,
  },
  {
    id: "3",
    authorAvatart: 'First Item',
    authorName:'5.min.craft',
    image:require ('../assets/instagram/img1.jpg'),
    isLinked: true,
    viewCount: 600357,
  },

];


export default function BT3_1() {
  const renderItem = ({item}) => (

  );
  
  return (
    <>
       <SafeAreaView style={styles.container}>
         <FlatList
         data={DATA}
         renderItem 
         />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
