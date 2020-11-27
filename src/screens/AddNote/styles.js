import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#722f37"
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        margin: 10
    },  
    titleField: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 10,
        width: "100%"
    },
    noteField: {
        padding: 10,
        margin: 10,
        fontSize: 17
    },
    buttons: {
        display: 'flex',
        flexDirection: "row",
        alignContent: "flex-end",
        justifyContent: "flex-end",
        margin: 20
    },
    textBtn: {
        fontSize: 17,
        color: "#722f37"
    }
});

export default styles;