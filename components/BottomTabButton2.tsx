import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface BottomTabButton3Props {
  isFocused: boolean;
  iconName: string;
  routeName: string;
}

const BottomTabButton2: React.FC<BottomTabButton3Props> = ({
  isFocused,
  iconName,
  routeName,
}) => {
  const shakeTranslate = useSharedValue(0);
  const TranslationAmount = 10;
  const timingConfig = {
    easing: Easing.bezier(0.35, 0.7, 0.5, 0.7),
    duration: 120,
  };

  useEffect(() => {
    shakeTranslate.value = withSequence(
      withTiming(TranslationAmount, timingConfig),
      withRepeat(withTiming(-TranslationAmount, timingConfig), 3, true),
      withSpring(0, {
        mass: 0.5,
      })
    );
  }, [isFocused]);

  const iconAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: shakeTranslate.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={isFocused ? iconAnimation : {}}>
        <MaterialCommunityIcons
          name={iconName}
          size={34}
          color={isFocused ? "#0d0b26" : "#FFF"}
        />
      </Animated.View>
      {isFocused && (
        <Animated.Text
          style={[
            {
              color: isFocused ? "#0d0b26" : "#FFF",
              fontSize: 18,
              fontWeight: "500",
              marginLeft: 8,
            },
          ]}
        >
          {routeName}
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabButton2;
