import { StyleSheet } from "react-native";

function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalText: {
    color: "white",
  },
});
