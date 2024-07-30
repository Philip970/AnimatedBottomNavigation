import {
  StyleSheet,
  Text,
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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ICON_NAMES = ["home", "briefcase", "cart", "account"];

const BottomTabBar1 = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { width } = useWindowDimensions();
  const MARGIN = 20;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
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

  const BottomTabButton = ({
    isFocused,
    iconName,
    routeName,
  }: {
    isFocused: boolean;
    iconName: string;
    routeName: string;
  }) => {
    return (
      <>
        <MaterialCommunityIcons
          name={iconName}
          size={34}
          color={isFocused ? "#0d0b26" : "#FFF"}
        />
        <Text style={{ color: isFocused ? "#0d0b26" : "#FFF", fontSize: 12 }}>
          {routeName}
        </Text>
      </>
    );
  };

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
              <BottomTabButton
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

export default BottomTabBar1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 90,
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#0d0b26",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  slidingTab: {
    width: 70,
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
