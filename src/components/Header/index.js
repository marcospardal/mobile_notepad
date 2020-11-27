import React from 'react';
import { View, Text, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

//styles
import styles from './styles';

function Header(props) {

    function add(title) {
        if (title === "Notes") {
            props.navigation.navigate("AddNote");
        } else {
            props.navigation.navigate("AddAppointment");
        }
    }

    function cancel() {
        props.navigation.navigate("Main");
    }

    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
            {
                props.title === "Notes" || props.title === "Calendar" ?
                <Icon 
                    style={styles.addBtn}
                    size={30}
                    name={"add-outline"}
                    onPress={() => add(props.title)}
                />
                :
                props.title !== "Notes" && props.title !== "Calendar" ?
                <Icon name={"close-outline"}
                    size={30}
                    style={styles.addBtn}
                    onPress={() => cancel()}
                />
                :
                <></>
            }
        </View>
    )
};

export default Header;