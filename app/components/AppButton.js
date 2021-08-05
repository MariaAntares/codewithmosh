import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Touchable,
} from "react-native";
import colors from "../config/colors";
function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});

export default AppButton;
