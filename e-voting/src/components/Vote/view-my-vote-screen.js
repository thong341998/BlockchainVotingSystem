import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {transactions} from '../Blockchain/Transaction/transaction-data';
import {elections} from '../Vote/election-data';
import {account} from '../Authentication/account-data';
import VoteList from '../Vote/vote-list';

export default function  ViewMyVoteScreen({navigation}){
	

	const myTransaction = transactions.filter(trans => trans.voterPublicKey === account.publicKey);
	const getVotesByAccount = (accountTransactions) =>{
		const result = [];
		accountTransactions.forEach(trans => {
			var vote = elections.find(vote => vote.id === trans.id);
			if (vote)
				result.push(vote);
		})
		return result;
	}
	
	return (
		<View style = {{marginTop:40}}>
			<Text style = {{fontSize:25,fontWeight:'bold',marginLeft:15}}>My Votes:</Text>
			<VoteList  accountTransactions = {myTransaction} readonly = {true} navigation = {navigation} voteData = {getVotesByAccount(myTransaction)} />
		</View>
	);
}


const styles = StyleSheet.create({
	
}) 