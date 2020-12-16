import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = ({ addButtonHandler }) => {
  const [entertedGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (entertedText) => {
    setEnteredGoal(entertedText);
  };

  const addGoalHandler = () => {
    addButtonHandler(entertedGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Goals?'
        value={entertedGoal}
        onChangeText={goalInputHandler}
      />
      <Button title='Add' onPress={addGoalHandler} />
    </View>
  );
};

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
