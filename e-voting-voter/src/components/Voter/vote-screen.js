import React,{useState} from 'react';
import {View, StyleSheet, Text, TextInput, Alert,Button, TouchableWithoutFeedback} from 'react-native';
import Textarea from 'react-native-textarea';

export default function  VoteScreen(props){
	const [privateKey,setPrivateKey] = useState('Place your private key here');

	const accountPrivateKey = '430b4033b5f7a980e6d024f2ca50987aee2ac93bcbb5c15bf4d6a493224f7ade';

	const candidate = props.route.params.candidate;
	const signature = '430b4033b5f7a980e6d024f2ca50987aee2ac93bcbb5c15bf4d6a493224f7ade';
	const account = {
		id:0,
		username:'thong',
		pass:'123',
		publicKey:'0454abb1fc29b93927c1b124b8489929013b8bfde1f37baa8c0c98352ac15f23a8402f9f7eb4ad5416bbed7d49abe7ebfa186ec9802311a58bd16d27907a7e556e',
		displayName:'Thong'
	}

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

		<TouchableWithoutFeedback onPress = {() => Alert.alert('Your vote is now pending',`Your signature is:\n${signature}`)}>
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