import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Navigation } from "./src/components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

// since there are no resources to download like fonts etc... no splash screen is required

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
