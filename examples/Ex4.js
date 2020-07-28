import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Ex4() {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.headerText}> Header Menu here </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.content}> Welcome</Text>
        
      </View>

      <View >
        <Text style={styles.footerText}> Footer  there </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center"
    flexDirection: "column",
    justifyContent: "space-between",

  },
  content: {
    color: "red",
    fontSize: 30
  },
  footerText: {
    color: "red",
    fontSize: 13,
    alignItems:"flex-end"
  },
  headerText: {
    color: "blue",
    fontSize: 12
  },
  box: {
    width: 400,
    height: 300,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center"    
  }
});
