import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addButtonHandler, visible, onCancel }) => {
  const [entertedGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (entertedText) => {
    setEnteredGoal(entertedText);
  };

  const addGoalHandler = () => {
    addButtonHandler(entertedGoal);
    setEnteredGoal("");
    onCancel();
  };

  return (
    <Modal visible={visible} animationType='fade'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Goals?'
          value={entertedGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
