import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemsCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={item}
      style={styles.productTab}
      onPress={() => {
        navigation.navigate("Product Detail Page", { id: item.id });
      }}
    >
      <Text style={styles.productText}>{item.title}</Text>
      <Image
        source={{ uri: `${item?.images[0]}` }}
        style={styles.productTabImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "orangered",
    borderWidth: 3,
    margin: 3,
  },
  productText: {
    maxWidth: 100,
    fontSize: 16,
    textTransform: "capitalize",
    color: "white",
    padding: 7,
  },
  productTabImage: {
    height: 80,
    width: 120,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});

export default ItemsCard;
