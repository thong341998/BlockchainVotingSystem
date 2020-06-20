import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Alert, Button} from 'react-native';
import {navigationName} from '../../global/globalConstants';
import CandidateButton from './candidate-button';

export default function  CandidateList(props){

	const onCandidateButtonPress = (candidate) =>{
		if (!props.readonly){
			Alert.alert(
			"Voting Confirm",
			`Are you sure you want to vote for ${candidate.name}`,
			[
			{
			 text:'Yes',
			 onPress: () => props.navigation.navigate(navigationName.voteScreen,{candidate:candidate})
			},
			{
				text:'No',
				style:'cancel'
			},
			],
			{cancelabel:false}
			)
		}
		
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

	const isSelectedCandidate = (candidate, selectedId) =>{
		return (candidate.id === selectedId);
	}

	return (
		<View style ={{flex:1}}>
		<FlatList
		 data = {props.candidates}
		 renderItem = {({item}) =>
		 	<CandidateButton isSelected = {isSelectedCandidate(item,props.selectedIndex)} onPress = {() => onCandidateButtonPress(item)} candidate = {item} />
		 }
		 ItemSeparatorComponent = {() => renderSeperator()}
		 keyExtractor = {item => item.id} 
		/>
		</View>
	);
}


const styles = StyleSheet.create({
	
})