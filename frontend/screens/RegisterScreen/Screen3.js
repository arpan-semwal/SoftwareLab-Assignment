import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallHeading}>Farmers Eats</Text>
      <Text style={styles.signupText}>Signup 3 of 4</Text>
      
      <Text style={styles.verificationHeading}>Verification</Text>
      <Text style={styles.verificationText}>
        Please verify your account by attaching the required documents.
      </Text>

      <View style={styles.attachContainer}>
        <Text style={styles.attachText}>Attach proof of registration</Text>
        <TouchableOpacity style={styles.cameraButton}>
          <FontAwesome name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Screen4')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50, // Added padding from the top
  },
  smallHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  signupText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  verificationHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  verificationText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  attachContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  attachText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  cameraButton: {
    backgroundColor: '#5EA25F',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto', // Pushes the buttons to the bottom
    marginBottom: 20, // Adds some space at the bottom
  },
  backButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#5EA25F',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
