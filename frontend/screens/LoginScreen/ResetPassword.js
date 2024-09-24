import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this package for icons

export default function ResetPassword() {
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer Eats</Text>

      {/* Large space below the title */}
      <View style={styles.spacer} />

      <Text style={styles.heading}>Reset Password</Text>
      <Text style={styles.smallText}>Remember Your Password? Login</Text>

      {/* New Password Input Field */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={!newPasswordVisible}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
          <Ionicons 
            name={newPasswordVisible ? "eye-off" : "eye"} 
            size={20} 
            color="gray" 
          />
        </TouchableOpacity>
      </View>

      {/* Confirm New Password Input Field */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Ionicons 
            name={confirmPasswordVisible ? "eye-off" : "eye"} 
            size={20} 
            color="gray" 
          />
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3', // Light gray border
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
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
});
