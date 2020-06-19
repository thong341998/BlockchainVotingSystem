import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Alert, Button} from 'react-native';
import {navigationName} from '../../global/globalConstants';
import CandidateButton from './candidate-button';

export default function  CandidateList(props){

	const onCandidateButtonPress = (candidate) =>{
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
		<View style ={{flex:1}}>
		<ScrollView style = {{marginTop:40}}>
		<FlatList
		 data = {props.candidates}
		 renderItem = {({item}) =>
		 	<CandidateButton onPress = {() => onCandidateButtonPress(item)} candidate = {item} />
		 }
		 ItemSeparatorComponent = {() => renderSeperator()} 
		/>
		</ScrollView>
		</View>
	);
}


const styles = StyleSheet.create({
	
})