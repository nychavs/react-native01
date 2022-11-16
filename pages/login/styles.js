import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    linearGradient:{
        height:'50%',
        width:'100%',
        resizeMode:'cover',
        position:'absolute',
        borderBottomLeftRadius:'55vw',
        borderBottomRightRadius:'55vw',
        display:'flex',
        boxShadow: '0px 10px 8px rgba(0, 0, 0, 0.25)'
    },
    container: {
        flex: 1,
        display:'flex',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    imgLogo:{
        width:'45%',
        height:'35%',
        marginLeft:'25vw',
        marginTop:'20vw',

    },
    inputContainer: {
        width: '60vw',
        height: '40vh',
        marginTop:'60vw',
        backgroundColor: '#1F83BD',
        borderRadius: '2vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 10px 8px 3px rgba(0, 0, 0, 0.25)'
    },
    TextInput: {
        // marginTop: '1.5vw',
        marginBottom: '1vw',
        color: 'white',
        marginTop:'5vw',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: '4vw',
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
        padding: '10',
        width:'25vw',
        height: 35,
        backgroundColor: '#4FB3ED',
        borderRadius: 15,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '7vw',
        marginBottom: '0.7vw',
        fontSize: 20,
        fontFamily: 'Verdana'
    },
    txtClick:{
        fontSize: '4.5vw',
        textDecorationLine: 'underline',
        color: '#1F83BD',
        marginTop:'5vw',
        marginBottom:'12vw',
        textAlign:'center'
    },
    txtClick2:{
        fontSize: '4.5vw',
        marginBottom:'2vw',
        textDecorationLine: 'none',
        color: '#1F83BD',
        textAlign:'center'
    },
})

export default styles