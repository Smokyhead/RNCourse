import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    alert("Goal added!");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputConatiner}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => 
          <Text style={styles.goalText} key={goal}>{goal}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#582f0e",
    flex: 1,
  },
  textInput: {
    borderColor: "#582f0e",
    borderWidth: 1,
    width: "75%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    padding: 16,
    flex: 9,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: "#f5ebe0",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderColor: "#582f0e",
    borderWidth: 1,
  },
  goalText: {
    paddingVertical: 12.5,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#d5bdaf",
    borderRadius: 20,
    fontFamily: "Arial",
    fontSize: 18,
    color: "#582f0e",
    fontWeight: "bold",
    borderColor: "#582f0e",
    borderWidth: 1,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
  },
});
