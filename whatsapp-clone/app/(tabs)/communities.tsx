import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CommunitiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Community pages</Text>
      <Text style={styles.logo}>New pages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#25D366",
  },
});