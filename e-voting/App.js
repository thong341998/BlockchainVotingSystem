import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CandidateScreen from './src/components/Candidate/candidate-screen';
import VoteScreen from './src/components/Voter/vote-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {navigationName} from './src/global/globalConstants';

const Stack = createStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = {navigationName.candidateScreen}>
    <Stack.Screen name = {navigationName.voteScreen} component = {VoteScreen} />
    <Stack.Screen name = {navigationName.candidateScreen} component = {CandidateScreen} />
    </Stack.Navigator>
    </NavigationContainer>
   // <CandidateScreen />
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
