import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Screen4() {
  const navigation = useNavigation(); // Hook to access navigation

  const days = ["M", "T", "W", "Th", "F", "S", "Su"];
  const timeRanges = ["8am to 10am", "10am to 2pm", "2pm to 4pm", "4pm to 6pm", "6pm to 8pm"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer Eats</Text>
      <Text style={styles.subtitle}>Signup 4 of 4</Text>

      <Text style={styles.heading}>Business Hours</Text>
      <Text style={styles.description}>
        Please select your business hours for the week.
      </Text>

      {/* Days of the week buttons */}
      <View style={styles.daysContainer}>
        {days.map((day, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Time range buttons in two columns */}
      <View style={styles.timeRangesContainer}>
        <View style={styles.column}>
          {timeRanges.slice(0, 3).map((range, index) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.buttonText}>{range}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column}>
          {timeRanges.slice(3).map((range, index) => (
            <TouchableOpacity key={index} style={styles.button}>
              <Text style={styles.buttonText}>{range}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Footer with Back and Continue buttons */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText} onPress={() => navigation.navigate("Screen5")}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'gray',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  timeRangesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#D3D3D3', // Light grey color
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Change text color for contrast
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', // Push footer to the bottom
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue', // Change color as needed
  },
  continueButton: {
    backgroundColor: '#007BFF', // Continue button color
    padding: 10,
    borderRadius: 5,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
