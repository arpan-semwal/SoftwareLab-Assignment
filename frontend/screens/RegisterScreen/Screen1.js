import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Icon library, you can replace with any other

const Screen1 = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleContinue = () => {
    if (password === rePassword) {
      navigation.navigate('Screen2'); // Change this to your next screen
    } else {
      alert('Passwords do not match');
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Signing in with ${platform}`);
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen'); // Change to your login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>Farmer-eats</Text>
      <Text style={styles.heading}>Welcome</Text>

      {/* Social Sign-In Buttons in a Row */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#db4437' }]} // Google Button
          onPress={() => handleSocialLogin('Google')}
        >
          <FontAwesome name="google" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#3b5998' }]} // Facebook Button
          onPress={() => handleSocialLogin('Facebook')}
        >
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#000' }]} // Apple Button
          onPress={() => handleSocialLogin('Apple')}
        >
          <FontAwesome name="apple" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="phone" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          secureTextEntry
          value={rePassword}
          onChangeText={setRePassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 30,
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 30,
    width: '100%',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#5EA25F',
 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginLeft: 5,
  },
  loginButton: {
	backgroundColor: '#5EA25F',
	
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen1;
