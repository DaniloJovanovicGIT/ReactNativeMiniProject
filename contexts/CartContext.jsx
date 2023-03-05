import { Children, createContext, useState } from "react";
import { View, Text } from "react-native";
import React from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={[Cart, setCart]}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
