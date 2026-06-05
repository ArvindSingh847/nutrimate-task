import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

function App(): React.JSX.Element {
  const [message, setMessage] = useState("");

  const sendRequest = async () => {
    try {
      const response = await fetch(
        "https://nutrimate-task.onrender.com/hello",
        {
          method: "POST",
        }
      );

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nutrimate Assignment
      </Text>

      <Button
        title="Send Request"
        onPress={sendRequest}
      />

      {message ? (
        <Text style={styles.message}>
          {message}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
  message: {
    marginTop: 20,
    fontSize: 20,
    color: "white",
  },
});

export default App;