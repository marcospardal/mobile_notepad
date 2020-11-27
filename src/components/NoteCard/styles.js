import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: 'black',
        shadowRadius: 2,
        elevation: 5,
        padding: 10
    }, 
    container: {
        display: "flex",
        flexDirection: "row"
    },
    info: {
        flex: 4,
        height: 80,
        
    },
    options: {
        borderLeftWidth: 0.5,
        padding: 5,
        borderColor:'black',
        flex: 1,
        justifyContent: "space-around",
        right: 5,
        position: "absolute",
        marginTop: 12,
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
    },
    note: {
        fontSize: 15,
        color: 'black',
        width: "80%"
    }
});

export default styles;