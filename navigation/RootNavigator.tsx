import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator1 from "./BottomTabNavigator1";
import BottomTabNavigator2 from "./BottomTabNavigator2";
import BottomTabNavigator3 from "./BottomTabNavigator3";
import BottomTabNavigator4 from "./BottomTabNavigation4";
import BottomTabNavigator5 from "./BottomTabNavigation5";
import Dashboard from "../screens/Dashboard";

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="BottomTabNavigator1"
        component={BottomTabNavigator1}
      />
      <Stack.Screen
        name="BottomTabNavigator2"
        component={BottomTabNavigator2}
      />
      <Stack.Screen
        name="BottomTabNavigator3"
        component={BottomTabNavigator3}
      />
      <Stack.Screen
        name="BottomTabNavigator4"
        component={BottomTabNavigator4}
      />
      <Stack.Screen
        name="BottomTabNavigator5"
        component={BottomTabNavigator5}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
