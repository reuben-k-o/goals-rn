import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteItem(props.id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        // onPress={props.onDeleteItem.bind(this, props.id)}
        onPress={deleteGoalHandler}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
