import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Welcome to React Native!</Text>
      </View>
      <Text style={styles.dummyText}>Hello world!!</Text>
      <Button title="Click here!" onPress={() => alert("Button clicked")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
