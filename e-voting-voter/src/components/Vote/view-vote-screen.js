import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {elections} from './election-data';
import {transactions} from '../Blockchain/Transaction/transaction-data';
import {account} from '../Authentication/account-data';
import VoteList from './vote-list';
import Axios from 'axios';

export default function  ViewVoteScreen({navigation}){

	const voteDatas = () =>{
		Axios.get('http://10.0.2.2:3000/posting')
		.then(response => {
			console.log('vote datas:',response.data);
		})
		.catch(error => console.log(error));
	}

	const myTransaction = transactions.filter(trans => trans.voterPublicKey === account.publicKey);
	const cloneVotes = elections.filter(vote => vote.status === 1 || vote.status === 2);
	myTransaction.forEach(trans =>{
		var voteIndex = cloneVotes.findIndex(e => e.id === trans.data.voteId);
		cloneVotes.splice(voteIndex,1);
	})
		
	return (
		<ScrollView style = {{marginTop:40}} >
			<Text style = {{fontSize:25,fontWeight:'bold',marginLeft:15}}>Available Votes:</Text>
			<VoteList  navigation = {navigation} voteData = {cloneVotes} />
		</ScrollView>
	);
}


const styles = StyleSheet.create({
	
}) 