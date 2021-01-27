import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

import ScrollItem from "../components/ScrollItem";
import { MAX_HEIGHT } from "../components/ScrollItem/styles";

import { scrollItems } from "../models/ScrollItem/Model";

const styles = StyleSheet.create({
  container: {
    height: scrollItems.length * MAX_HEIGHT,
    backgroundColor: "#000",
  },
});

const Channel = () => {
  const yPosition = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      yPosition.value = y;
    },
  });

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={onScroll}
        contentContainerStyle={{ height: (scrollItems.length + 1) * MAX_HEIGHT, backgroundColor: '#000' }}
        snapToInterval={MAX_HEIGHT}
        decelerationRate="fast"
      >
        <Animated.View
          style={styles.container}
        >
          {scrollItems.map((item, index) => (
            <ScrollItem
              item={item}
              key={index}
              y={yPosition}
              index={index} />
          ))}
        </Animated.View>
        <Animated.View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
          <Animated.Text style={{ fontSize: 48, marginRight: 10 }}>🦍</Animated.Text>
          <Animated.Text style={{
            color: '#fff',
            fontSize: 32,
            lineHeight: 48,
            paddingRight: 16,
            fontWeight: "500",
            textAlign: 'right'}}>Hercules</Animated.Text>
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
};

export default Channel;
