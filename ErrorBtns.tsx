import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorBtns = () => {
  const onPressJS = () => {
    throw new Error(` throw an error!`);
  };

  return (
    <View style={{ gap: 20 }}>
      <Pressable onPress={onPressJS} style={styles.btn}>
        <Text style={{ color: "white" }}>{"Handle JS error"}</Text>
      </Pressable>
      <Pressable style={[styles.btn, { backgroundColor: "red" }]}>
        <Text style={{ color: "white" }}>{"API error"}</Text>
      </Pressable>
    </View>
  );
};

export default ErrorBtns;

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
