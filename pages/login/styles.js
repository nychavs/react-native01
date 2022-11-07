import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(180deg, rgba(81,169,219,1) 0%, rgba(163,209,236,1) 51%, rgba(234,245,255,1) 87%)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '30%',
        height: '40%',
        backgroundColor: '#1F83BD',
        borderRadius: '2vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        marginTop: '1.5vw',
        color: 'white',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 20,
        color: '#DDD',
    },
    txtInput1: {
        width: '80%',
        height: '7vh',
        backgroundColor: '#C0E9FF',
        padding: 10,
        borderColor: '#777',
        borderRadius: '1.2vw',
        color: 'rgba(31, 131, 189, 0.46)',
    },
    botaoLogin: {
        padding: 10,
        width:'10vw',
        height: 35,
        backgroundColor: '#4FB3ED',
        borderRadius: 15,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1vw',
        marginBottom: '0.7vw',
        fontSize: 20,
        fontFamily: 'Verdana'
    }
})

export default styles