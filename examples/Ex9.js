import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Ex5() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 30 }}></View>
      <View style={styles.content}>
        <View style={{ height: 150 }}></View>
        <Text style={styles.textCenter}>Hello world</Text>
        <Text style={styles.textCenter}>Dang Quang Huy</Text>
        <Text style={styles.textCenter}>0913048733</Text>
        <View style={{ height: 30 }}></View>

        <TextInput style={styles.TextInputStyle_1} />

        <View style={{ height: 30 }}></View>

        <TouchableOpacity style={styles.button_style}>
        <Text> Đăng nhập </Text>
        </TouchableOpacity>

        <View style={{ height: 30 }}></View>

        <View style={styles.two_button}>
          <TouchableOpacity style={styles.two_button_style}>  
           <Text> Quên mật khẩu </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.two_button_style}>
          <Text> Thoát tài khoản </Text>
          </TouchableOpacity>

        </View>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  content: {
    flex: 1,
    backgroundColor: "#b0006d",
    justifyContent: "flex-start",
    color: "white",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    width: "100%",
    height: 100,
    backgroundColor: "blue",
  },
  textCenter: {
    textAlign: "center",
    color: "white",
  },
  TextInputStyle_1: {
    height: 65,
    width: 350,
    borderRadius: 25,
    textAlign: "center",
    backgroundColor: "white",
    color: "black",
  },
  button_style: {
    height: 50,
    width: 350,
    backgroundColor: "cyan",
    borderRadius: 25,
    textAlign:"center"
  },
  two_button: {
    flexDirection:"row",
    
  },
  two_button_style: {
    height: 50,
    width: 180,
    backgroundColor: "cyan",
    borderRadius: 25,
    

  }
});
