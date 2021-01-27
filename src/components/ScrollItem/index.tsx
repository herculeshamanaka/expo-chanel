import React from "react";
import {Image, Alert, View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Animated, { interpolate, useAnimatedStyle, Extrapolate } from "react-native-reanimated";

export interface Item {
  title: string;
  subtitle: string;
  picture: number;
  top: number;
}

interface ItemProps {
  item: Item;
  index: number;
  y: Animated.SharedValue<number>;
}

import styles, { MAX_HEIGHT, MIN_HEIGHT } from "./styles";

const ScrollItem = ({ index, y, item: { title, subtitle, picture } }: ItemProps) => {

  const inputRange = [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT];

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        inputRange,
        [MIN_HEIGHT, MAX_HEIGHT],
        Extrapolate.CLAMP
      ),
    };
  });

  const animatedTitle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        inputRange,
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });



  return (
    <TouchableWithoutFeedback onPress={() => Alert.alert("Pressed!")}>
      <Animated.View style={[styles.container, animatedContainerStyle]}>
        <Image source={picture} style={[styles.picture]} />
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{subtitle.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={animatedTitle}>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ScrollItem;
