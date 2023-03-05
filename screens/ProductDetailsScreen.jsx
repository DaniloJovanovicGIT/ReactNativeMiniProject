import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { cartContext } from "../contexts/CartContext";

const ProductDetailsScreen = ({ route, params }) => {
  const { id } = route.params;
  const [productData, setProductData] = useState();
  const [cart, setCart] = useContext(cartContext);

  const fetchProductData = useCallback(async () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductData(res));
  }, []);

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const addToCart = () => {
    setCart([
      ...cart,
      { id: Math.random(), title: productData.title, price: productData.price },
    ]);
  };

  return (
    <View>
      <Text style={styles.category}>From: {productData?.category}</Text>
      {productData?.images && (
        <Image
          source={{ uri: `${productData?.images[0]}` }}
          style={styles.productImage}
        />
      )}
      <View style={styles.detailsSection}>
        <View style={styles.infoSection}>
          <Text style={styles.title}>{productData?.title}</Text>
          <Text style={styles.description}>
            Description: {productData?.description}
          </Text>
        </View>
        <View style={styles.buySection}>
          <Text style={styles.price}>{productData?.price}$</Text>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => addToCart()}
          >
            <Text style={styles.buyButtonText}>Add to cart</Text>
          </TouchableOpacity>
          <Text style={styles.stock}>
            On stock: {productData?.stock ? productData.stock : "None"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    fontSize: 12,
    padding: 5,
  },
  productImage: {
    width: "100%",
    height: "60%",
  },
  detailsSection: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  infoSection: {
    flex: 3,
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 8,
  },
  description: {
    fontSize: 18,
    paddingVertical: 8,
  },
  price: { fontSize: 30, alignContent: "center", paddingTop: 8 },
  buyButton: {
    width: 90,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "red",
    borderWidth: 10,
    borderColor: "orangered",
    marginTop: 6,
  },
  buyButtonText: { fontSize: 20, fontWeight: "bold", color: "white" },
  stock: { marginTop: 6 },
});

export default ProductDetailsScreen;
