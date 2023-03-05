import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import ItemsCard from "../components/ItemsCard";
import React, { useState } from "react";

export default function SearchPageScreen() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const handleInput = (input) => {
    setInput(input);
  };

  const handleSubmit = () => {
    fetch(`https://dummyjson.com/products/search?q=${input}`)
      .then((res) => res.json())
      .then((res) => setData(res.products));
  };

  console.log(data);

  return (
    <View style={styles.searchPage}>
      <Text style={styles.header}>What are you looking for?</Text>
      <TextInput
        style={styles.input}
        placeholder={"We have over million items"}
        onChangeText={(input) => handleInput(input)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Find anything</Text>
      </TouchableOpacity>
      <View style={styles.resultList}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemsCard item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchPage: { alignItems: "center" },
  header: { fontSize: 20, padding: 10 },
  input: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "orangered",
    padding: 5,
    borderRadius: 10,
    width: "90%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "orangered",
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    padding: 6,
  },
  resultList: {
    marginVertical:7,
  },
});
