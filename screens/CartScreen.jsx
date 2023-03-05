import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { cartContext } from "../contexts/CartContext";

const CartScreen = () => {
  const [cart, setCart] = useContext(cartContext);
  const totalPrice = cart.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  return (
    <View style={styles.cartPage}>
      <View style={styles.headerMessage}>
        <Text style={styles.messageText}>
          Thank you for buying our products
        </Text>
      </View>

      <Text style={styles.messageText}>Your cart</Text>

      <FlatList
        style={styles.itemList}
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.title}</Text>
            <Text>{item.price}$</Text>
          </View>
        )}
      />
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total: </Text>
        <Text style={styles.totalText}>{totalPrice}$</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Place order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerMessage: { alignItems: "center", margin: 10 },
  messageText: { fontSize: 16, fontWeight: "bold" },
  cartPage: { margin: 10 },
  itemList: { maxHeight: 350 },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "orangered",
    borderBottomWidth: 3,
    padding: 4,
    margin: 3,
  },
  totalSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: -40,
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
});
