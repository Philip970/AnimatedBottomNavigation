import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

interface BottomTabButton3Props {
  isFocused: boolean;
  iconName: string;
  routeName: string;
}

const BottomTabButton3: React.FC<BottomTabButton3Props> = ({
  isFocused,
  iconName,
  routeName,
}) => {
  const iconAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(isFocused ? -35 : 12),
        },
      ],
    };
  });

  const nameAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(isFocused ? 1 : 0),
        },
      ],
    };
  });

  return (
    <>
      <Animated.View style={[styles.container, iconAnimation]}>
        <MaterialCommunityIcons name={iconName} size={34} color="white" />
      </Animated.View>
      <Animated.Text
        style={[
          {
            color: "white",
            fontSize: 12,
          },
          nameAnimation,
        ]}
      >
        {routeName}
      </Animated.Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BottomTabButton3;
