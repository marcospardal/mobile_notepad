import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

//styles
import styles from './styles';

//actions
import { removeNote } from '../../store/notes';

function NoteCard(props) {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes);
    
    function updateNotes() {
        dispatch(removeNote(props.note));

        const newNotes = notes.filter(note => {return note.title !== props.note.title})

        AsyncStorage.setItem("notes", JSON.stringify(newNotes))
    }

    return(
        <View style={styles.card}>
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {props.note.title}
                </Text>
                <Text style={styles.note}>
                    {props.note.note}
                </Text>
            </View>
            <View style={styles.options}>
                <Icon 
                    name={"ios-pencil"}
                    color={'black'}
                    size={20}
                />
                <Icon 
                    name={"trash"}
                    color={'red'}
                    size={20}
                    onPress={updateNotes}
                />
            </View>
        </View>
    </View>
    )
};

export default NoteCard;