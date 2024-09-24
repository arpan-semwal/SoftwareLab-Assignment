import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icon
import {useNavigation} from '@react-navigation/native';

export default function ForgetPassword() {
	
	const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer Eats</Text>

      {/* Large space below the title */}
      <View style={styles.spacer} />

      <Text style={styles.heading}>Forgot Password?</Text>
      <Text style={styles.smallText}>Remember Your Password? Login</Text>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="phone" size={20} color="gray" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Phone Number" 
          keyboardType="phone-pad" 
        />
      </View>

      {/* Send Code Button */}
      <TouchableOpacity style={styles.sendCodeButton} onPress={() => navigation.navigate('VerifyOtpScreen')}>
        <Text style={styles.sendCodeButtonText}>Send Code</Text>
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
    textAlign: 'center',
  },
  spacer: {
    height: 60, // Adjust the height for the large space
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3', // Light gray border
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  sendCodeButton: {
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendCodeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
