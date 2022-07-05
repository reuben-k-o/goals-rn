import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredNewGoalText) {
    setEnteredGoalText(enteredNewGoalText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function clearOnCancel() {
    props.onCancel();
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#008080" />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={clearOnCancel} color="#f61c25" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#575757",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    borderRadius: 8,
    backgroundColor: "#f0f8ff",
    color: "#120438",
    width: "100%",
    padding: 8,
    elevation: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 30,
  },
});
