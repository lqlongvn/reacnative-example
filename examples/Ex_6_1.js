import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
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

const Instagram_logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";
const DATA = [
  {
    id: "1",
    authorAvatar: require("../assets/instagram/avatar1.jpg"),
    authorName: "5.min.craft",
    image: require("../assets/instagram/img1.jpg"),
    isLiked: true,
    viewCount: 600357,
  },
  {
    id: "2",
    authorAvatar: require("../assets/instagram/avatar2.jpg"),
    authorName: "6.min.craft",
    image: require("../assets/instagram/img2.jpg"),
    isLiked: false,
    viewCount: 100234,
  },
  {
    id: "3",
    authorAvatar: require("../assets/instagram/avatar3.jpg"),
    authorName: "7.min.craft",
    image: require("../assets/instagram/img3.jpg"),
    isLiked: true,
    viewCount: 354859,
  },
];

export default function Ex_6_1() {
  // TODO: Sửa lại hiển thị của item
  const renderItem = ({ item }) => (
    <View>
      <View>
        <Text>{item.authorName}</Text>
      </View>

      {/* Khối thứ 2 */}
      <Image source={item.image}  style ={styles.articleImage}/>

      {/* Khối thứ 3 */}
      <View >
        {/* <FontAwesome5 name="heart" size="24" style={{marginRight:15}} />
        <FontAwesome5 name="comment" size="24" style={{marginRight:15}} />
        <FontAwesome5 name="paper-plane" size="24" /> */}

      </View>
    </View>
  );

  // TODO: Sửa lại hiển thị phần Header
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 50 }}></View>

      <View style={styles.header}>
        <FontAwesome5 name="camera" size={35} />
        <Image
          source={{uri:Instagram_logo}}
          style={styles.Logo}
        />
        <Image
          source={require("../assets/instagram/forward1.png")}
          style={styles.tinyLogo}
        />

        {/* <Ionicons name="archway"  /> */}
      </View>

      <View style={styles.header2}>
        <Image
          source={require("../assets/instagram/img1.jpg")}
          style={styles.tinyLogo}
        />
        <Image
          source={require("../assets/instagram/img2.jpg")}
          style={styles.tinyLogo}
        />
        <Image
          source={require("../assets/instagram/img3.jpg")}
          style={styles.tinyLogo}
        />
      </View>
      <View style={styles.header2}>
        <Text style={{ textAlign: "center" }}> Person 1 </Text>
        <Text style={{ textAlign: "center" }}> People 2 </Text>
        <Text style={{ textAlign: "center" }}> Person 3 </Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
}

const PADDING_HORIZONTAL = 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal:PADDING_HORIZONTAL,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 18,
  },
  Logo: {
    resizeMode:"contain",
    width: 200,
    height: 50,
  },
  articleImage:{
    resizeMode:"contain",
    width: "100%",
    backgroundColor:"red",
  }
 
});
