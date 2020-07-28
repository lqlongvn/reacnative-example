import React from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
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

export default function Ex6() {
  // TODO: Sửa lại hiển thị của item
  const renderItem = ({ item }) => (
    <View>
      <View>
        <Text>{item.authorName}</Text>
      </View>

      <Image source={item.image} />

      <View></View>
    </View>
  );

  // TODO: Sửa lại hiển thị phần Header
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="camera" size={20} />
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
