import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Bottom Navigation 1"
        onPress={() => navigation.navigate("BottomTabNavigator1")}
      />

      <Button
        title="Bottom Navigation 2"
        onPress={() => navigation.navigate("BottomTabNavigator2")}
      />

      <Button
        title="Bottom Navigation 3"
        onPress={() => navigation.navigate("BottomTabNavigator3")}
      />

      <Button
        title="Bottom Navigation 4"
        onPress={() => navigation.navigate("BottomTabNavigator4")}
      />

      <Button
        title="Bottom Navigation 5"
        onPress={() => navigation.navigate("BottomTabNavigator5")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default Dashboard;
