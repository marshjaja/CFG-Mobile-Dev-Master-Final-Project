import React from 'react';
import { Text, View } from 'react-native';
import './src/styles/styles.css';

export default function ChatScreen () {
    return (
        <View style={styles.card}>
            <Text style={styles.cardHeader}>Code4Girls</Text>
            <Text style={styles.cardBody}>Chat</Text>
            <View style={styles.input} />
        </View>
    );
}