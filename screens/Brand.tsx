import { StyleSheet, Text, View } from "react-native";

const Brand = () => {
  return (
    <View style={styles.container}>
      <Text>Brand</Text>
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
