import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

export const AuthenticationContext = React.createContext();

export default function  AuthenticationProvider(props){
	
	const[authentication,setAuthentication] = useState();
	//Render children when wrapping the provider
	return (
		<AuthenticationContext.Provider value = {{authentication,setAuthentication}}>
			{props.children} 
		</AuthenticationContext.Provider>
	);
}


const styles = StyleSheet.create({
	
})