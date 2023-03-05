import { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import ItemsCard from "../components/ItemsCard";

export default function ProductListPageScreen() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("laptops");
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);


  const fetchCategories = useCallback(async () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  const fetchCategoryProducts = useCallback(async () => {
    fetch(`https://dummyjson.com/products/category/${currentCategory}`)
      .then((res) => res.json())
      .then((res) => setCurrentCategoryProducts(res.products));
  }, [currentCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchCategoryProducts();
  }, [currentCategory]);

  return (
    <View style={styles.page}>
      <View style={styles.categorySelect}>
        <FlatList
          horizontal={true}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item}
              style={styles.categoryTab}
              onPress={() => setCurrentCategory(item.toString())}
            >
              <Text style={styles.categoryText}>{item.toString()}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.productSelect}>
        <FlatList
          data={currentCategoryProducts}
          renderItem={({ item }) => <ItemsCard item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  categoryTab: {
    marginVertical: 10,
    marginHorizontal: 2,
    borderRadius: 10,
    backgroundColor: "black",
  },
  categoryText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "white",
    padding: 7,
  },  
});
