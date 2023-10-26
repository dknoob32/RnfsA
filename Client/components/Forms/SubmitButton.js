import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, title, loading }) => {
  return (
    <TouchableOpacity style={styles.SubmitBtn} onPress={handleSubmit}>
      <Text style={styles.SubmitTxt}>{loading ? "Please Wait..." : title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubmitBtn: {
    backgroundColor: "black",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  SubmitTxt: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default SubmitButton;
