import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import BottomTabButton3 from "./BottomTabButton3";

const ICON_NAMES = ["home", "briefcase", "cart", "account"];

const BottomTabBar3 = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { width } = useWindowDimensions();
  const TAB_BAR_WIDTH = width;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(TAB_WIDTH * state.index),
        },
      ],
    };
  });

  return (
    <View style={[styles.container, { width: TAB_BAR_WIDTH, bottom: 0 }]}>
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
              <BottomTabButton3
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

export default BottomTabBar3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 110,
    paddingBottom: 20,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#0d0b26",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  slidingTab: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#ff5252",
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    bottom: 110,
    alignItems: "center",
    justifyContent: "center",
  },
});
