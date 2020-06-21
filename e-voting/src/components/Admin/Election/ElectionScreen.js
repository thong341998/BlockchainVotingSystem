import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, Alert, FlatList } from 'react-native'
import Modal from 'react-native-modal';
import Axios from 'axios';

var screenWidth = Dimensions.get('window').width;

const CandidateItem = (props) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Text style={{
                        margin: 5,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>{props.name}</Text>
                    <Text style={{
                        margin: 5,
                        fontSize: 14,
                    }}>{props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
}

export default function ElectionScreen(props) {
    let  election  = props.route.params.election;
    //console.log('',);

    const [modalOpen, setModalOpen] = useState(false);
    const [candidateName, setCandidateName] = useState('');
    const [candidateDescription,setCandidateDescription] =useState(''); 

    const [candidates, setCandidates] = useState([
        {
            id:0,
            name: 'Roanaldo',
            description:'Vote for me'
        },
        {
            id:1,
            name: 'Messi',
            description:'Vote for me'
        }
    ]);

    const showStartVotingButton = () =>{
        if (election.status  === 0)
            return ( <TouchableOpacity
                    style={{
                        backgroundColor: 'blue',
                        borderRadius: 5,
                        width: 100,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                        alignSelf: 'center',
                        marginTop: 10
                    }}

                    onPress={() => AddElection()}
                >
                    <Text>Start voting</Text>
                </TouchableOpacity>
                )
        return null;
    }



    const showAddCandidateButton = () =>{
        if (election.status === 0 ){
            return (<TouchableOpacity
                    style={{
                        backgroundColor: 'blue',
                        borderRadius: 5,
                        width: 100,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                        alignSelf: 'center',
                        marginTop: 10
                    }}

                    onPress={() => setModalOpen(true)}
                >
                    <Text>Add candidate</Text>
                </TouchableOpacity>)
        }
        return null;
    }

    const showCloseVotingButton = () =>{
        if (election.status === 1){
            return (
                <TouchableOpacity
                    style={{
                        backgroundColor: 'red',
                        borderRadius: 5,
                        width: 100,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                        alignSelf: 'center',
                        marginTop: 10
                    }}

                    onPress={EndElection}
                >
                    <Text>Stop voting</Text>
                </TouchableOpacity>
                )
        }
        return null;
    }

    const EndElection = () => {

    }

    const AddCandidate = (candidateName,candidateDescription) => {
        //console.log('candidateName', candidateName);

        let candidate = {
            id: candidates.length + 1,
            name: candidateName,
            description:candidateDescription
        }
        setCandidates((preCandidates) => {
            return [candidate, ...preCandidates];
        });

        setModalOpen(false);
    }

    const CloseModalCandidate = () => {
        setModalOpen(false);
    }

    const OpenModalCandidate = () => {
        setModalOpen(true);
    }

    const AddElection = async () => {
        if (candidates && candidates.length > 0) {
            await Axios.post('http://localhost:3000/posting', {
                content: 'Khong co',
                title: election.title,
                ListpersonId: candidates
            })
                .then(response => {
                    Alert.alert('Election is now starting !!!')
                })
                .catch(error => console.log("loi dang nhap"));
        }

    }

    const renderCandidate = (item, index) => {
        return <CandidateItem name={item.name} description = {item.description}
            vote={0}
            key={index} />
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
        <View style={styles.container}>
            <FlatList
            data = {candidates}
            renderItem = {({item}) =>  <CandidateItem name={item.name} description = {item.description} />} 
            ItemSeparatorComponent = {() => renderSeperator()}
            keyExtractor = {item => item.id.toString()} 
              />

            <Modal isVisible={modalOpen} animationType='slide'
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View style={styles.modalContent}>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 20
                        }}
                    >Add new candidate</Text>

                    <TextInput placeholder='Candidate name' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 20
                    }}
                        onChangeText={text => setCandidateName(text)}
                    />
                     <TextInput placeholder='Candidate description' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 20
                    }}
                        onChangeText={text => setCandidateDescription(text)}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10
                            }}

                            onPress={() => {
                                AddCandidate(candidateName,candidateDescription)
                            }}
                        >
                            <Text>Add</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'grey',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10
                            }}
                            onPress={() => CloseModalCandidate()}
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
               {showStartVotingButton()}
                {showAddCandidateButton()}
               {showCloseVotingButton()}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        width: screenWidth - 80,
        height: 250,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})
