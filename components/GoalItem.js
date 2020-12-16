import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const GoalItem = ({ title }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("press");
      }}
    >
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
