import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CandidateScreen from './src/components/Candidate/candidate-screen';
import VoteScreen from './src/components/Voter/vote-screen';
import ViewVoteScreen from './src/components/Vote/view-vote-screen';
import ViewMyVoteScreen from './src/components/Vote/view-my-vote-screen';
import BlockchainHistoryScreen from './src/components/Blockchain/blockchain-history-screen';
import { NavigationContainer, DrawerNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VoteStack from './src/components/Vote/vote-stack';
import ViewMyVoteStack from './src/components/Vote/view-my-vote-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationName} from './src/global/globalConstants';
import LoginScreen from './src/components/Login/login-screen';

const MainDrawerNavigator = () =>{
  const Drawer = createDrawerNavigator();
  return (
       <Drawer.Navigator>
  <Drawer.Screen options = {{title:'View Vote'}} name = {navigationName.voteStack} component = {VoteStack} />
  <Drawer.Screen options = {{title:'View My Vote'}} name =  {navigationName.viewMyVoteStack} component = {ViewMyVoteStack} />
  <Drawer.Screen options = {{title:'Blockchain History'}} name = {navigationName.blockchainHistory} component = {BlockchainHistoryScreen} />
  </Drawer.Navigator>
    )
 
}

const MainStackNavigation = () =>{
  const Stack  = createStackNavigator();
  return (
       <Stack.Navigator>
  <Stack.Screen options = {{headerShown:false}} name = {navigationName.loginScreen} component = {LoginScreen} />
  <Stack.Screen options = {{headerShown:false}} name = {navigationName.mainDrawerNavigator} component = {MainDrawerNavigator} />
  </Stack.Navigator>
    )
 
}


export default function App() {
  return (
    <NavigationContainer>
     <MainStackNavigation />
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
