import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#722f37"
    },
    title: {
        marginLeft: 20,
        fontSize: 25,
        color: "#FFF",
        fontFamily: "sans-serif-condensed"
    },
    addBtn: {
        color: "#FFF",
        marginRight: 20
    }
});

export default styles;