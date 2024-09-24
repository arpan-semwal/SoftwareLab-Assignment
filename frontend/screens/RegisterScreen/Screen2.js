import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const Screen2 = ({ navigation }) => {
  const [businessName, setBusinessName] = useState('');
  const [informalName, setInformalName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [state, setState] = useState('');
  const [zipNumber, setZipNumber] = useState('');

  const handleContinue = () => {
    navigation.navigate('Screen3');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farm Info</Text>

      {/* Business Name */}
      <View style={styles.fullWidthInputContainer}>
        <FontAwesome name="building" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Business Name"
          value={businessName}
          onChangeText={setBusinessName}
        />
      </View>

      {/* Informal Name */}
      <View style={styles.fullWidthInputContainer}>
        <FontAwesome name="user" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Informal Name"
          value={informalName}
          onChangeText={setInformalName}
        />
      </View>

      {/* Street Address */}
      <View style={styles.fullWidthInputContainer}>
        <FontAwesome name="map" size={20} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Street Address"
          value={streetAddress}
          onChangeText={setStreetAddress}
        />
      </View>

      {/* State and Zip Code */}
      <View style={styles.row}>
        <View style={styles.halfWidthInputContainer}>
          <FontAwesome name="flag" size={20} color="#888" />
          <Picker
            selectedValue={state}
            style={styles.picker}
            onValueChange={(itemValue) => setState(itemValue)}
          >
            <Picker.Item label="Select State" value="" />
            <Picker.Item label="State 1" value="state1" />
            <Picker.Item label="State 2" value="state2" />
          </Picker>
        </View>

        <View style={styles.halfWidthInputContainer}>
          <FontAwesome name="map-marker" size={20} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Zip Number"
            keyboardType="numeric"
            value={zipNumber}
            onChangeText={setZipNumber}
          />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="#fff" />
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  fullWidthInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
    paddingHorizontal: 15,
  },
  halfWidthInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '48%',
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
  picker: {
    flex: 1,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#5EA25F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginLeft: 5,
  },
  backButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen2;
