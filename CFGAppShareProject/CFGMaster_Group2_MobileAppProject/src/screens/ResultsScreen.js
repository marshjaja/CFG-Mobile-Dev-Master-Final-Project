import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { useState } from "react";
import styles from "../styles/AppStyles.js";
import { Keyboard } from "react-native";
import LoginButton from "../components/LoginButton";

export default function Form() {
  const [finalGrade, setFinalGrade] = useState("");
  const [gradeBand, setGradeBand] = useState("");

  return (
    <View>
      <LoginButton />
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

          if (result < 49) {
            setGradeBand("Fail 😔");
          } else if (result > 50 && result < 69) {
            setGradeBand("Pass 😊");
          } else if (result > 70 && result < 89) {
            setGradeBand("Merit 😄");
          } else if (result > 90) {
            setGradeBand("Distinction 😎");
          }

          Keyboard.dismiss();
        }}
      >
        {(props) => (
          <View style={styles.card}>
            <Text style={styles.cardHeader}>Code First Girls</Text>
            <Text style={styles.cardBody}>Grade calculator</Text>
            <Text style={styles.cardBody}>First assessment grade (10%):</Text>
            <TextInput
              style={styles.input}
              placeholder="value1"
              onChangeText={props.handleChange("value1")}
              value={props.values.value1}
              keyboardType="numeric"
            />
            <Text style={styles.cardBody}>Second assessment grade (25%):</Text>
            <TextInput
              style={styles.input}
              placeholder="value2"
              onChangeText={props.handleChange("value2")}
              value={props.values.value2}
              keyboardType="numeric"
            />
            <Text style={styles.cardBody}>Homework average (15%):</Text>
            <TextInput
              style={styles.input}
              placeholder="value3"
              onChangeText={props.handleChange("value3")}
              value={props.values.value3}
              keyboardType="numeric"
            />
            <Text style={styles.cardBody}>Group project result (25%):</Text>
            <TextInput
              style={styles.input}
              placeholder="value4"
              onChangeText={props.handleChange("value4")}
              value={props.values.value4}
              keyboardType="numeric"
            />
            <Text style={styles.cardBody}>
              Specialisation exam result (25%):
            </Text>
            <TextInput
              style={styles.input}
              placeholder="value5"
              onChangeText={props.handleChange("value5")}
              value={props.values.value5}
              keyboardType="numeric"
            />
            <Button
              style={styles.button}
              title="calculate final grade"
              onPress={props.handleSubmit}
            ></Button>
            <Text style={styles.cardBody}>Final Grade: {finalGrade}%</Text>
            <Text style={styles.cardBody}>{gradeBand}</Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
