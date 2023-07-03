import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../styles/AppStyles.js";
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
      <Text style={styles.header}>Code4Girls</Text>
      <ScrollView style={styles.chatContainer}>
        {messages.map(({ id, text, user }) => (
          <ChatMessage key={id} message={text} user={user} />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
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
