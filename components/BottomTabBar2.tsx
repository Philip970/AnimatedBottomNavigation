import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import BottomTabButton2 from "./BottomTabButton2";

const ICON_NAMES = ["home", "briefcase", "cart", "account"];

const BottomTabBar2 = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { width } = useWindowDimensions();
  const MARGIN = 20;
  const PADDING = 24;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(
            TAB_WIDTH * state.index +
              (state.index === 0 ? PADDING : 0) -
              (state.index === state.routes.length - 1 ? PADDING : 0)
          ),
        },
      ],
    };
  });

  return (
    <View style={[styles.container, { width: TAB_BAR_WIDTH, bottom: MARGIN }]}>
      <Animated.View
        style={[
          styles.slidingTabContainer,
          {
            width: TAB_WIDTH,
          },
          translateAnimation,
        ]}
      >
        <View style={styles.slidingTab} />
      </Animated.View>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;
        const iconName = ICON_NAMES[index];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableWithoutFeedback
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={styles.content}>
              <BottomTabButton2
                isFocused={isFocused}
                iconName={iconName}
                routeName={route.name}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default BottomTabBar2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 90,
    padding: 24,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#0d0b26",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  content: {
    alignItems: "center",
  },
  slidingTab: {
    width: 120,
    height: 70,
    borderRadius: 100,
    backgroundColor: "white",
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
