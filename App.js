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
import GoalInput from "./components/GoalInput";

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
      <GoalInput
        textHandler={changeTextHandler}
        addButtonHandler={addButtonHandler}
        goalsInput={goalsInput}
      />
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
