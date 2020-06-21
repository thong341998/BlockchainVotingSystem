import React from 'react';
import {View, StyleSheet, FlatList,Text} from 'react-native';
import {transactions} from '../Blockchain/Transaction/transaction-data';
import {account} from '../Authentication/account-data';
import {candidates} from '../Candidate/candidate-data';


const getCandidate = (vote,candidates) =>{
		const result = [];
		vote.candidateIds.forEach((id) =>{
			var candidate = candidates.find((candidate) => candidate.id === id);
			if (candidate)
				result.push(candidate);
		})
		return result;
	}

const CandidateVoteCountItem = (props) =>{
	return (
		<View style = {styles.item}>
		<Text style = {styles.name}>{props.candidate.name}</Text>
		<Text style = {{fontSize:18, marginHorizontal:15}}>Total vote:{props.voteCount}</Text>
		</View>
		)
}	

export default function  VoteResultScreen(props){
	
	const vote = props.route.params.vote;
	const transForVoteId  = transactions.filter(trans => trans.data.voteId === vote.id);
	const candidatesByVoteId = getCandidate(vote,candidates);
	const candidatesResult = [];
	candidatesByVoteId.forEach(cand => {
		candidatesResult.push({
			candidate:cand,
			voteCount:0
		})
	});
	transForVoteId.forEach(trans => {
		var count = 0;
		var index = candidatesResult.findIndex(cand => cand.candidate.id === trans.data.candidateId);
		if (index !== -1){
			candidatesResult[index].voteCount++;
		}
	})

	const renderSeperator = () =>{
		return (
			 <View
        style={[{
          height: 0.75,
          backgroundColor: "#CED0CE",
        },props.titleStyle]}
      />
			)
	}


	return (
		<View>
			<FlatList
			data = {candidatesResult}
			renderItem = {({item}) => <CandidateVoteCountItem candidate = {item.candidate} voteCount = {item.voteCount} />}
			keyExtractor = {item => item.candidate.id}
			ItemSeparatorComponent = {() => renderSeperator()} 
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	item:{
		marginVertical:10
	},
	name:{
		fontSize:22,
		fontWeight:'bold',
		marginHorizontal: 15
	}
})