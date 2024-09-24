import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Importing icons

export default function LoginScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmers Eats</Text>
      
      <Text style={styles.bigHeading}>Welcome Back!</Text>
      
      <Text style={styles.smallText}>New here? Create Account</Text>
      
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="gray" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Email Address" 
          keyboardType="email-address" 
        />
      </View>
      
      {/* Password Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
        />
        {/* Forgot Password Link */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Or Login With Text */}
      <Text style={styles.orText}>or</Text>

      {/* Social Login Icons */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIconButton}>
          <FontAwesome name="google" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconButton}>
          <FontAwesome name="apple" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconButton}>
          <FontAwesome name="facebook" size={30} color="black" />
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  bigHeading: {
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
  loginButton: {
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    color: 'gray',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIconButton: {
    backgroundColor: '#f0f0f0', // Light background for icons
    padding: 10,
    borderRadius: 50, // Circular shape
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    color: '#007BFF', // Color for the forgot password text
    marginLeft: 10,
  },
});
