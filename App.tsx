import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { registerRootComponent } from "expo";
import { ErrorBoundary } from "./ErrorBoundary";
import ErrorBtns from "./ErrorBtns";

const App = () => {
  return (
    <ErrorBoundary catchErrors="always">
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ErrorBtns />
      </SafeAreaView>
    </ErrorBoundary>
  );
};

registerRootComponent(App);

const styles = StyleSheet.create({});
