import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Ex9_1() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style ={[styles.text, {fontWeight:"bold"}]}> Xin Chào </Text>
      <Text style={styles.userNameText}> Huy </Text>
      <Text style={styles.userPhoneText}> 0913048733 </Text>
      <TouchableOpacity>
        <Text> Button </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
  },
  loginButton:{
    marginTop: 15,
    height: 50,
    backgroundColor:"#8d015a",
    borderRadius: 25,
    textAlign: "center",
    fontSize: 20,
    width:90%
  },
  linkButtonGroup:{
    flexDirection:'row',
    justifyContent:"space-between"
  }

});
