import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [goalsInput, setGoalsInput] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const changeTextHandler = (inputText) => {
    setGoalsInput(inputText);
  };

  const addButtonHandler = () => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalsInput,
      },
    ]);
    setGoalsInput("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Goals?'
          value={goalsInput}
          onChangeText={changeTextHandler}
        />
        <Button title='Add' onPress={addButtonHandler} />
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={goalsList}
        renderItem={(itemData) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              console.log("press");
            }}
          >
            <Text>{itemData.item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
