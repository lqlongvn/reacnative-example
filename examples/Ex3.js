import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Ex3() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Menu </Text>
      </View>
      <View>
      style={styles.redText}
        <Text style={{color:"red"}}>Welcome!!!! </Text>
      </View>
      <View>
        <Text>Footer </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#fff"
  },
  content: {
    flex:1,
    color: "red",
    fontSize: 30
  },
  box: {
    color: "red",
    fontSize: 13
  },
  blueText: {
    color: "blue",
    fontSize: 20
  }
});
