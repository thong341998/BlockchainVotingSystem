import React,{useState, useContext} from 'react';
import {View, StyleSheet, Text, TextInput, Alert,Button, TouchableWithoutFeedback} from 'react-native';
import Textarea from 'react-native-textarea';
import {AuthenticationContext} from '../../provider/authentication-provider';
import Axios from 'axios';

const onVotingButtonPress = (publicKey,privateKey, voteId, candidateId) =>{
		/*console.log(`voting with ${publicKey}-${privateKey}-${voteId}-${candidateId}`);
		Axios.post('http://10.0.2.2:3000/vote',{
			publicKey:publicKey,
			privateKey:privateKey,
			VoteId:voteId,
			personId:candidateId
		})
		.then(response =>{
			console.log(response);
			Alert.alert('Voting Successfully','Your vote is now confirm');
		})
		.catch(error =>{
			console.log(error);
		})*/
		const signature ='30440220631eb721358fe4214d4b86ccfa068f9259ae6aa15b0e4f6c9ca5b2924793d7820220519ae6edd700e905fbc82c6ff4d3449fc91897a1637352cb4187285e99f7ca16';
		Alert.alert('Voting Successfully',`Your signature is ${signature}`);
		
	}

export default function  VoteScreen(props){
	const [privateKey,setPrivateKey] = useState('Place your private key here');

	const authenticationContext = useContext(AuthenticationContext);
	const account = authenticationContext.authentication;
	//console.log(account);

	const accountPrivateKey = '430b4033b5f7a980e6d024f2ca50987aee2ac93bcbb5c15bf4d6a493224f7ade';

	const candidate = props.route.params.candidate;
	const voteId = props.route.params.voteId;
	const signature = '430b4033b5f7a980e6d024f2ca50987aee2ac93bcbb5c15bf4d6a493224f7ade';
	


	return (
		<View style = {{marginTop:20,marginHorizontal:15, justifyContent:'space-around'}}>
		<Text style = {{marginTop:20,fontSize:20,fontWeight:'bold'}}>Your account Information</Text>
		<Text style = {styles.title}>Username: {account.username}</Text>
		<Text style = {styles.title}>Public Key</Text>
		<Text style =  {{marginTop:20}}>{account.publicKey}</Text>
		<Text style = {styles.title}>Private Key</Text>
		<Textarea
		 containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={text => setPrivateKey(text)}

    value = {privateKey}
    maxLength={120}
    placeholder={'Place your private key here'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
		/>

		<TouchableWithoutFeedback onPress = {() => onVotingButtonPress(account.publicKey,privateKey,voteId,candidate.id)}>
		<View style = {{height:40,marginTop:20,backgroundColor:'dodgerblue',justifyContent:'center', alignItems:'center'}}> 
		<Text style = {{fontSize:20,color:'white'}}>VOTE</Text>
		</View>
		</TouchableWithoutFeedback>
		</View>
	);
}


const styles = StyleSheet.create({
	title:{
		fontSize:16,
		marginTop:20
	},

	textareaContainer: {
		marginTop:20,
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
})