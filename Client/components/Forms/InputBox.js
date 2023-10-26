import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({
  inputTitle,
  keyboardType,
  autoComplete,
  secureTextEntry = false,
  value,
  setValue,
}) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text> {inputTitle}</Text>
      <TextInput
        style={styles.TextInput}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text)=> setValue(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 20,
    color: "#af9f85",
  },
});

export default InputBox;
