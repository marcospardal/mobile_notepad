import React, { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

//components
import Header from '../../components/Header';
import Card from '../../components/NoteCard';

//styles
import styles from './styles';

function Notes(props) {
    const notes = useSelector(state => state.notes);

    async function updateNotes() {
        await AsyncStorage.setItem("notes", JSON.stringify(notes));
    }

    useEffect(
        () => {updateNotes()}, []
    )

    return(
        <ScrollView style={styles.container}>
            <View>
                <Header title={"Notes"} navigation={props.navigation}/>
                <View>
                    {
                        notes.length > 0 ? 
                        notes.map((note, index) => (
                           <Card note={note} key={index}/>
                        ))
                        :
                        <Text style={styles.warning}>
                            You don't have any notes. Click the plus button to add
                        </Text>
                    }
                </View>
            </View>
        </ScrollView>
    )
};

export default Notes;