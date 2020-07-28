import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
  Image,
} from "react-native";

import bulbOff from "../assets/bulb-off.jpg";

export default function Ex6() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 30}}>
        
      </View >

      <View style={{justifyContent:"center"}}>

      <Text style={{textAlign:"center"}}> The Ligth </Text>

      </View>

      { <Image
        source={bulbOff}
        style={{ width: 400, height: 900, resizeMode: "contain", alignSelf:"center" }}
      /> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "space-between",
    //backgroundColor: "red",
  },
});
