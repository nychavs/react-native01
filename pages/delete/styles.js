import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ed5c53',
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
    }
})

export default styles