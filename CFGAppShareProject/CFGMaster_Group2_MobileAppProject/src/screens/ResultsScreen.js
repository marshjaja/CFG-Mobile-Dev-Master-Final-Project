import React from "react";
import { styleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useState } from "react";

export default function Form() {
  const [finalGrade, setFinalGrade] = useState("");

  return (
    <View>
      <Formik
        initialValues={{
          value1: " ",
          value2: " ",
          value3: " ",
          value4: " ",
          value5: " ",
        }}
        onSubmit={(values) => {
          var result = Math.round(
            (Number(values.value1) * 1 +
              Number(values.value2) * 2.5 +
              Number(values.value3) * 1.5 +
              Number(values.value4) * 2.5 +
              Number(values.value5) * 2.5) /
              10
          );
          setFinalGrade(result);
        }}
      >
        {(props) => (
          <View>
            <Text>First assessment grade (10%):</Text>
            <TextInput
              placeholder="value1"
              onChangeText={props.handleChange("value1")}
              value={props.values.value1}
              keyboardType="numeric"
            />
            <Text>Second assessment grade (25%):</Text>
            <TextInput
              placeholder="value2"
              onChangeText={props.handleChange("value2")}
              value={props.values.value2}
              keyboardType="numeric"
            />
            <Text>Homework average (15%):</Text>
            <TextInput
              placeholder="value3"
              onChangeText={props.handleChange("value3")}
              value={props.values.value3}
              keyboardType="numeric"
            />
            <Text>Group project result (25%):</Text>
            <TextInput
              placeholder="value4"
              onChangeText={props.handleChange("value4")}
              value={props.values.value4}
              keyboardType="numeric"
            />
            <Text>Specialisation exam result (25%):</Text>
            <TextInput
              placeholder="value5"
              onChangeText={props.handleChange("value5")}
              value={props.values.value5}
              keyboardType="numeric"
            />
            <Button
              title="calculate final grade"
              onPress={props.handleSubmit}
            ></Button>
            <Text>Final Grade: {finalGrade}</Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
