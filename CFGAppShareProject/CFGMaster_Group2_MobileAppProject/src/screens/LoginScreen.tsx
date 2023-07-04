import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("CFG");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Account registered");
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.image}>
          <Image
            source={require("../../assets/code4.png")}
            style={{ width: 200, height: 200, top: 10 }}
            resizeMode="contain"
          />
        </View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#9336B4" />
        ) : (
          <>
            <View>
              <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.buttonText}>Create account</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginVertical: 4,
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
});
