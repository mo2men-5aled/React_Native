import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  var show = false;
  var input_Data = "";
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {show ? <Text>Clicked</Text> : null}
      <TextInput
        placeholder="type your name"
        onChange={(event) => {
          input_Data = event.target.value;
          console.log(input_Data);
        }}
      />
      <Button
        style={(styles.button, { backgroundColor: "red" })}
        title="Click me"
        onPress={() => {
          if (!show) {
            show = true;
          } else {
            show = false;
          }
        }}
      >
        Click me
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    width: 200,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
