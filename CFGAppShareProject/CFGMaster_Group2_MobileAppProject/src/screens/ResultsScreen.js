import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
  TextInput,
  View,
  Text,
} from "react-native";
import { Formik } from "formik";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Form({ navigation }) {
  const [finalGrade, setFinalGrade] = useState("");
  const [gradeBand, setGradeBand] = useState("");
  const [showFinalGrade, setShowFinalGrade] = useState(false);
  const [showGradeBand, setShowGradeBand] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
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

            setShowFinalGrade(true);
            setShowGradeBand(true);
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.text}>First assessment grade (10%):</Text>
              <TextInput
                style={styles.input}
                placeholder="value1"
                onChangeText={props.handleChange("value1")}
                value={props.values.value1}
                keyboardType="numeric"
              />
              <Text style={styles.text}>Second assessment grade (25%):</Text>
              <TextInput
                style={styles.input}
                placeholder="value2"
                onChangeText={props.handleChange("value2")}
                value={props.values.value2}
                keyboardType="numeric"
              />
              <Text style={styles.text}>Homework average (15%):</Text>
              <TextInput
                style={styles.input}
                placeholder="value3"
                onChangeText={props.handleChange("value3")}
                value={props.values.value3}
                keyboardType="numeric"
              />
              <Text style={styles.text}>Group project result (25%):</Text>
              <TextInput
                style={styles.input}
                placeholder="value4"
                onChangeText={props.handleChange("value4")}
                value={props.values.value4}
                keyboardType="numeric"
              />
              <Text style={styles.text}>Specialisation exam result (25%):</Text>
              <TextInput
                style={styles.input}
                placeholder="value5"
                onChangeText={props.handleChange("value5")}
                value={props.values.value5}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>Calculate Final Grade</Text>
              </TouchableOpacity>

              {showFinalGrade && (
                <Text style={styles.finalText}>Final Grade: {finalGrade}%</Text>
              )}
              {showGradeBand && (
                <Text style={styles.finalText}>{gradeBand}</Text>
              )}
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
  input: {
    marginVertical: 15,
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#9336B4",
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#9336B4",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginVertical: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    // top: 60,
    right: -8,
  },
  finalText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
  },
});
