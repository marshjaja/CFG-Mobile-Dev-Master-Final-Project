import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { firebaseApp } from "../../FirebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ChatMessage from "../components/ChatMessage.js";

const firestore = getFirestore(firebaseApp);

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, setUser);

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const q = query(
      collection(firestore, "messages"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSendMessage = async () => {
    try {
      if (user) {
        await addDoc(collection(firestore, "messages"), {
          text: currentMessage,
          user: user.email, // Use the user's email as the username
          timestamp: new Date().toISOString(),
        });
        setCurrentMessage("");
      } else {
        console.error("No user is signed in");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map(({ id, text, user }) => (
          <ChatMessage key={id} message={text} user={user} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={currentMessage}
          onChangeText={setCurrentMessage}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  chatContainer: {
    marginTop: 20,
    marginVertical: 15,
    marginHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#9336B4",
    padding: 10,
    backgroundColor: "#DFB5FE",
  },
  input: {
    marginVertical: 4,
    marginHorizontal: 15,
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
    marginHorizontal: 15,
    borderRadius: 6,
    marginVertical: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
