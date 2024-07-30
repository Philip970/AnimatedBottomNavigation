import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../screens/Profile";
import Brand from "../screens/Brand";
import Home from "../screens/Home";
import Cart from "../screens/Cart";

import BottomTabBar2 from "../components/BottomTabBar2";

export type BottomTabParamList = {
  Home: undefined;
  Brand: undefined;
  Cart: undefined;
  Profile: undefined;
};

const BottomTabNavigator2 = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar2 {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Brand" component={Brand} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator2;
