import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import AdminHome from './src/components/Admin/Home/AdminHome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenKey } from './src/global/globalConstants';
import LoginScreen from './src/components/Login/LoginScreen';
import ElectionScreen from './src/components/Admin/Election/ElectionScreen';
import MainBottomTab from './src/routes/MainBottomTab';
import SignUpScreen from './src/components/Signup/SignupScreen';


const Stack = createStackNavigator();
const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigationStyle.defaultNavigationOptions} initialRouteName={ScreenKey.LoginScreen}>
      <Stack.Screen
        name={ScreenKey.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name={ScreenKey.SignUpScreen}
        component={SignUpScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name={ScreenKey.MainBottomTab}
        component={MainBottomTab}
        options={{ headerShown: false, title: 'Admin home screen' }} />
      <Stack.Screen
        name={ScreenKey.ElectionScreen}
        component={ElectionScreen}
        options={{ headerShown: true, title: 'Election screen' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const navigationStyle = {
  defaultNavigationOptions: {
    headerStyle: {
      height: 80,
      backgroundColor: "#eee",
      borderBottomColor: "transparent",
      elevation: 0 // for android
    },
  }
}