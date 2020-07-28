import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Switch,
  Platform,
} from "react-native";
import bulbOff from "../assets/bulb-off.jpg";
import bulbOn from "../assets/bulb-on.jpg";

const windowWidth = Dimensions.get("window").width;

export default function Ex3() {
  const [isEnabled, setEnabled] = useState(false);

  function toggleSwitch() {
    // Cách 1
    // setEnabled(previousState => !previousState);

    // Cách 2
    const newState = !isEnabled;
    setEnabled(newState);
  }

  return (
    <SafeAreaView style={CSS.container}>
      <Image source={isEnabled ? bulbOn : bulbOff} style={CSS.image} />

      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        style={{
          alignSelf: "center",
          transform: Platform.OS === "ios" ? [] : [{ scale: 2 }],
        }}
      />

      <View style={{ alignItems: "center" }}>
        <Switch value={isEnabled} />
      </View>

      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Switch value={true} />
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
