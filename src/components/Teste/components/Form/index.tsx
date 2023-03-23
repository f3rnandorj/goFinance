import React from "react";
import { View, StyleSheet } from "react-native";
import FormField from "../..";
import { fieldJson } from "../../fieldJson";

const App = () => {
  return (
    <View style={styles.container}>
      {fieldJson.fields.map((field) => (
        <FormField key={field.id} field={field} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
