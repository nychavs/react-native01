import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
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
        width: '50%',
        height: 60,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#238223f',
        borderRadius:5,
        shadowColor:{height: 4, width: 4},
        shadowColor: '#238223f'
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: 'black',
    },
    pageDelete:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '2vw'
    },
    deleteItem:{
        justifyContent: 'center',
        paddingLeft: '15px'
    },
    txtDelete:{
        padding:'5px',
        backgroundColor:'#f0b3af',
        margin:'2px'
    },
    bntContainer:{
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles