import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = ({ goalsInput, textHandler, addButtonHandler }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder='Goals?'
      value={goalsInput}
      onChangeText={textHandler}
    />
    <Button title='Add' onPress={addButtonHandler} />
  </View>
);

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
