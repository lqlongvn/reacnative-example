import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Switch,
  Image,
  Dimensions,
} from "react-native";

import bulbOff from "../assets/bulb-off.jpg";
import bulbOn from "../assets/bulb-on.jpg";

const windowWidth = Dimensions.get("window").width;

export default function Ex6() {
  const [isEnabled, setEnabled] = useState(false);
  function toggleSwitch(){
    //Cach 1
    //setEnabled(previousState => !previousState);

    //Cach 2
    const newState = !isEnabled;
    setEnabled(newState);
  }


  return (
    <SafeAreaView style={CSS.container}>
      <View style={{ height: 30 }}></View>

      <View style={{ justifyContent: "center" }}>
        <Text style={{ textAlign: "center", color:"#fff" }}> The Light </Text>
      </View>

      <Image source={isEnabled ? bulbOn: bulbOff} style={CSS.image} />
      
      <View style={{flexDirection:"row", justifyContent: "center" }}>
      <Switch
        value={isEnabled}
        trackColor={{ false: "red", true: "#81b0ff" }}
        value={true} 
        style={{alignSelf:"center", 
        transform:Platform.OS === 'ios' ? []: [{scale:2}] }}
      />
      </View>

    </SafeAreaView>
  );
}

const CSS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: windowWidth,
    height: (windowWidth * 925) / 631,
    resizeMode: "contain",
  },
});
