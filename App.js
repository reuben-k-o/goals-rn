import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem />;
          }}
        />
      </View>
    </View>
  );
}
/* styles */

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
