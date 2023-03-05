import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import CartContextProvider from "./contexts/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text>Dummy app</Text>
        </View>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaView>
    </CartContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 4,
    borderBottomColor: "orangered",
  },
});
