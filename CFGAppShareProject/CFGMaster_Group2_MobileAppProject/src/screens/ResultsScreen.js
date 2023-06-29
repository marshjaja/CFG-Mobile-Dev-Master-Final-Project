import React from "react";
import { styleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

export default function Form() {
  var result;
  return (
    <View>
      <Formik
        initialValues={{
          value1: " ",
          value2: " ",
          value3: " ",
        }}
        onSubmit={(values) => {
          var result =
            Number(values.value1) +
            Number(values.value2) +
            Number(values.value3);
          console.log(result);
          return result;
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="value1"
              onChangeText={props.handleChange("value1")}
              value={props.values.value1}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="value2"
              onChangeText={props.handleChange("value2")}
              value={props.values.value2}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="value3"
              onChangeText={props.handleChange("value3")}
              value={props.values.value3}
              keyboardType="numeric"
            />
            <Button title="submit" onPress={props.handleSubmit}></Button>
            <Text>Show result title={result}</Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
