import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Brand from "../screens/Brand";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import BottomTabBar5 from "../components/BottomTabBar5";

export type BottomTabParamList = {
  Home: undefined;
  Brand: undefined;
  Cart: undefined;
  Profile: undefined;
};

const BottomTabNavigator5 = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabBar5 {...props} />}
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

export default BottomTabNavigator5;
