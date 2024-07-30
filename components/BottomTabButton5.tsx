import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface BottomTabButton3Props {
  isFocused: boolean;
  iconName: string;
}

const BottomTabButton5: React.FC<BottomTabButton3Props> = ({
  isFocused,
  iconName,
}) => {
  const iconAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: isFocused ? withSpring("0deg") : withSpring("180deg"),
        },
        {
          scale: withSequence(withTiming(0.7), withTiming(1.2)),
        },
      ],
    };
  });

  return (
    <Animated.View style={isFocused ? iconAnimation : {}}>
      <MaterialCommunityIcons
        name={isFocused ? iconName : `${iconName}-outline`}
        size={34}
        color={"#FFF"}
      />
    </Animated.View>
  );
};

export default BottomTabButton5;
