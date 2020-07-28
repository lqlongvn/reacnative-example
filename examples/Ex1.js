import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Ex1() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: 400, height: 300, backgroundColor: "#2ecc71", alignItems: "center",
    justifyContent: "center" }}>
        <Text style={styles.redText}> Welcome</Text>
        <Text style={styles.blueText}> TechMaster</Text>
        <Text> Hello World Ex1!</Text>
        {/*  Comment  */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  redText: {
    color: "red",
    fontSize: 30
  },
  blueText: {
    color: "blue",
    fontSize: 20
  }
});
