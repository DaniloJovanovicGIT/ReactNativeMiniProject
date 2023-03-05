import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product List Page"
        component={ProductListScreen}
      />
      <Stack.Screen
        name="Product Detail Page"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Categories"
        options={{ headerShown: false }}
        component={ProductsStack}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;
