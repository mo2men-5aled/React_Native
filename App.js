import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  var show = false;
  var input_Data = "";
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={() => {
          console.log("text clicked");
        }}
      >
        Open up App.js to start working on your app to be able to see or edit
        the code you tyype and when you do any changes expo allows the fast
        refresh
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
