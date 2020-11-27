import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

//components
import Header from '../../components/Header';

//styles 
import styles from './styles';

//actions
import { addNote } from '../../store/notes';

function AddNote(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    function save() {
        const note = {"title": title, "note": body};

        dispatch(addNote(note));
        props.navigation.navigate("Main")
    }

    return(
        <View style={styles.container}> 
            <Header title={"Add Note"} navigation={props.navigation}/>
            <View style={styles.input}>
                <TextInput 
                    style={styles.titleField}
                    placeholder="Title"
                    onChangeText={setTitle}
                    value={title}
                />
                <TextInput
                    onChangeText={setBody}
                    value={body}
                    multiline={true}
                    style={styles.noteField}
                    placeholder="Note" 
                />
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={save} style={styles.btn}>
                        <Text style={styles.textBtn}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default AddNote;