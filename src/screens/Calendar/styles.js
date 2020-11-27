import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#722f37",
    },
    calendar: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    hourContainer: {
        borderBottomWidth: 0.5,
        height: 60
    },
    appointmentTitle: {
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default styles;