import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import VoteItem from './vote-item';
import {navigationName} from '../../global/globalConstants';

export default function  VoteList(props){
	
	const onVoteItemPress = (vote) =>{
		props.navigation.navigate(navigationName.candidateScreenStack,{
			screen:navigationName.candidateScreen,
			params:{vote:vote}})
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

	const data = props.voteData;
	return (
		<View>
			<FlatList style = {{marginTop:20,marginHorizontal:15}}
			data = {data}
			renderItem = {({item}) => <VoteItem onPress = {() => onVoteItemPress(item)} vote = {item} /> }
			ItemSeparatorComponent = {() => renderSeperator()} 
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	
})