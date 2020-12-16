import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addButtonHandler = (inputGoal) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: inputGoal,
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addButtonHandler={addButtonHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={goalsList}
        renderItem={(itemData) => (
          <GoalItem id={itemData.item.id} title={itemData.item.value} />
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
