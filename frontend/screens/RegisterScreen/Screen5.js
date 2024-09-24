import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icon from expo-vector-icons
import { useNavigation } from '@react-navigation/native';

export default function Screen5() {
	const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      {/* Large check icon in the center */}
      <MaterialIcons name="check-circle" size={100} color="green" style={styles.checkIcon} />

      {/* Text below the check icon */}
      <Text style={styles.text}>
		Hang tight! We are currently reviewing your account and will follow up with you in 2-3 business days. 
		In the meantime, you can setup your inventory.
	  </Text>

      {/* 'Got it' button at the bottom */}
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate("Onboarding")}>
        <Text style={styles.buttonText}>Got it</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Optional background color
  },
  checkIcon: {
    marginBottom: 20, // Spacing between the icon and text
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30, // Spacing between text and button
    color: 'gray',
  },
  button: {
    position: 'absolute', // Position at the bottom of the screen
    bottom: 20,
    width: '100%', // Full width
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 15,
    borderRadius: 10, // Rounded corners
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
