import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import Screen1 from './screens/RegisterScreen/Screen1';
import Screen2 from "./screens/RegisterScreen/Screen2"
import Screen3 from './screens/RegisterScreen/Screen3';
import Screen4 from './screens/RegisterScreen/Screen4';
import Screen5 from './screens/RegisterScreen/Screen5';
import LoginScreen1 from './screens/LoginScreen/LoginScreen1';
import ForgetPassword from './screens/LoginScreen/ForgetPassword';
import VerifyOtpScreen from './screens/LoginScreen/VerifyOtpScreen';
import ResetPassword from './screens/LoginScreen/ResetPassword';

 

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }}  />
        <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }}  />
        <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }}  />
        <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }}  />
        <Stack.Screen name="Screen5" component={Screen5} options={{ headerShown: false }}  />
        <Stack.Screen name="LoginScreen1" component={LoginScreen1} options={{ headerShown: false }}  />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }}  />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
