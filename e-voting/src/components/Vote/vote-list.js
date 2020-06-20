import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import VoteItem from './vote-item';
import {navigationName} from '../../global/globalConstants';

export default function  VoteList(props){
	
	const onVoteItemPress = (vote) =>{
			props.navigation.navigate(navigationName.candidateScreenStack,{
			screen:navigationName.candidateScreen,
			params:{vote:vote, readonly:props.readonly, selectedIndex:getSelectedItemId(vote)}})
	}

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

	const relatedTransactionVoteData = props.relatedTransactionVoteData; 
	const accountTransactions = props.accountTransactions;


	const getSelectedItemId = (vote) =>{
		if (props.readonly){
			console.log('my account transaction: ',accountTransactions);
			console.log('vote id: ', vote.id);
			var relatedTransactionVoteData = accountTransactions.find(trans => trans.data.voteId === vote.id).data;
			return relatedTransactionVoteData.candidateId;
		}

		return -1;
	}

	const data = props.voteData;
	return (
		<View>
			<FlatList style = {{marginTop:5,marginHorizontal:15}}
			data = {data}
			renderItem = {({item}) => <VoteItem onPress = {() => onVoteItemPress(item)} vote = {item} /> }
			keyExtractor = {item =>  item.id}
			ItemSeparatorComponent = {() => renderSeperator()} 
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	
})