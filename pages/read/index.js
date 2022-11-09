import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import {db} from '../login/firebaseConfig';
import {getDocs, collection} from 'firebase/firestore';
import styles from './styles'

export default function Read({navigation}) {
    const [page, setPage] = useState()
    const media = '?alt=media'
    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/indmo-0510.appspot.com/o/images%2F'

    useEffect(async () => {
        const querySnapShot = await getDocs(collection(db, 'alunos'))
        const list = []
        querySnapShot.forEach(doc =>{
            list.push({ ...doc.data(), id: doc.id})
        })
        setPage(list)
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Read</Text>
            <FlatList
                numColumns={2}
                data={page}
                renderItem={({item})=>{
                    return(
                        <View style={styles.box}>
                            <Text style={styles.textLista}
                            onPress={()=>{
                                navigation.navigate('Update'),
                                {id: item.id, name: item.name, imagem: item.image, email: item.email}
                            }}
                            >
                                {item.name}
                            </Text>
                            <View style={styles.foto0}>
                                <img src={repositorio+item.image+media}
                                style={styles.foto1}/>
                            </View>
                        </View>
                    )
                }}
            >
                
            </FlatList>
        </View>
    )
}