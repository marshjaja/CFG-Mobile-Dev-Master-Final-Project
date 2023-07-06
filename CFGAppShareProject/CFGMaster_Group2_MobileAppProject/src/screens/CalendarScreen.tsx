import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Calendar } from "react-native-big-calendar";

const CalendarScreen = () => {
  const events = [
    {
      title: "Full-stack class at 18:30",
      start: new Date(2023, 6, 6, 18, 30),
      end: new Date(2023, 6, 6, 20, 30),
    },
    {
      title: "Team Meeting",
      start: new Date(2023, 6, 6, 11, 30),
      end: new Date(2023, 2, 6, 12, 30),
    },
    {
      title: "Walk the dog",
      start: new Date(2023, 6, 7, 7, 30),
      end: new Date(2023, 6, 7, 8, 0),
    },
    {
      title: "Coffee break",
      start: new Date(2023, 6, 7, 15, 0),
      end: new Date(2023, 6, 7, 15, 30),
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventCellStyle = () => {
    return {
      flex: 1,
      backgroundColor: "#9336B4",
      borderRadius: 5,
      padding: 5,
      marginRight: 20,
      marginTop: 17,
      height: 150,
      width: "100%",
    };
  };

  const renderEventContent = ({ event }) => {
    return <Text style={{ color: "white" }}>{event.title}</Text>;
  };

  const handleEventPress = (event) => {
    setSelectedEvent(event);
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
  };

  return (
    <View style={{ flex: 1, height: 800 }}>
      <Calendar
        events={events}
        height={600}
        eventCellStyle={eventCellStyle}
        renderEventContent={renderEventContent}
        eventColor="#9336B4"
        selectedColor="blue"
        enableDateChange={true}
        onPressEvent={handleEventPress}
      />
      <Modal visible={selectedEvent !== null} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              backgroundColor: "#9336B4",
              padding: 20,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "black",
              shadowOpacity: 0.3,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              {selectedEvent?.title}
            </Text>
            <Text>{selectedEvent?.start.toString()}</Text>
            <Text>{selectedEvent?.end.toString()}</Text>
            <TouchableOpacity onPress={handleModalClose} style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#9336B4",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CalendarScreen;
