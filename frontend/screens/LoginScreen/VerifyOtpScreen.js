import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function VerifyOtpScreen() {
	
	const navigation = useNavigation();
	
	
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer Eats</Text>

      {/* Large space below the title */}
      <View style={styles.spacer} />

      <Text style={styles.heading}>Verify OTP</Text>
      <Text style={styles.smallText}>Remember Your Password? Login</Text>

      {/* OTP Input Boxes */}
      <View style={styles.otpContainer}>
        {[...Array(5)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            placeholder="0" // Placeholder for each OTP box
          />
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress = {() => navigation.navigate("ResetPassword")} >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Resend Code Link */}
      <TouchableOpacity>
        <Text style={styles.resendCode}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff', // Optional background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left', // Align title to the left
  },
  spacer: {
    height: 60, // Adjust the height for the large space
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'left', // Align heading to the left
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    textAlign: 'left', // Align small text to the left
    marginBottom: 40,
    color: 'gray',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: '18%', // Each input takes 18% of the row
    height: 50,
    borderWidth: 1,
    borderColor: '#D3D3D3', // Light gray border
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
  resendCode: {
    color: '#007BFF', // Link color
    textAlign: 'center',
    marginTop: 20,
  },
});



