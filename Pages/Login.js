import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View>
      <Image source={require("./../assets/Images/login.jpg")} />
      <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontsize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
});
