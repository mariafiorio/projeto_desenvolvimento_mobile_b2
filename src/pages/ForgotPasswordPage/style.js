import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewImg:{
        width: '43%',
        height: '25%',
    },
    logoImg:{
        width: '100%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#4d0000',
    },
    inputs: {
        width: '50%',
        padding: 6,
    },
    inputSquare: {
        padding: 5,
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        marginBottom: 6,
    },
    btnConfirmar:{
        alignItems: "center",
        height: 30,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    btnConfirmarTxt:{
        color: 'black',
        fontWeight: 'bold',
    },
    viewLink:{
        flexDirection: 'row',
    },
    link:{
        color: 'white',
        padding: 5
    },
})

export default styles;
