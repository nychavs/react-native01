import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#088',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto1:{
        fontSize:50,
    },
    botao: {
        width: '60%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: '100%',
        height: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
    box:{
        backgroundColor:'purple',
        flexGrow:2,
        widht:'20vw',
        height:'40vw',
        alignItems:'center'

    },
    textLista:{
        color:'white',
        fontSize:'20px',
        padding:'5vw',
    },
    foto0:{
        width:'20vw',
        height:'20vw',
    },
    foto01:{
        width:'15vw',
        height:'15vw',
    }

})

export default styles