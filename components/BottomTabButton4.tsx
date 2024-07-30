import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

interface BottomTabButton3Props {
  isFocused: boolean;
  iconName: string;
  routeName: string;
}

const BottomTabButton4: React.FC<BottomTabButton3Props> = ({
  isFocused,
  iconName,
  routeName,
}) => {
  const { width } = useWindowDimensions();
  const TAB_BAR_WIDTH = width;
  const TAB_WIDTH = TAB_BAR_WIDTH / 4;

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

  const slidingTabAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(isFocused ? 1 : 0),
        },
        {
          translateY: withSpring(isFocused ? -45 : 12),
        },
      ],
    };
  });

  return (
    <>
      <Animated.View
        style={[
          styles.slidingTabContainer,
          {
            width: TAB_WIDTH,
          },
          slidingTabAnimation,
        ]}
      >
        <View style={styles.slidingTab} />
      </Animated.View>
      <Animated.View style={[styles.icon, iconAnimation]}>
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
  slidingTab: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#0d0b26",
    borderColor: "white",
    padding: 8,
    borderWidth: 2,
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabButton4;
