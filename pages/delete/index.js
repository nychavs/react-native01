import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {db} from '../login/firebaseConfig';
import {doc, getDocs, collection, deleteDoc} from 'firebase/firestore';
import styles from './styles'

export default function Delete({navigation}){

    const [page, setPage] = useState()

    useEffect(async () => {
        const querySnapShot = await getDocs(collection(db, 'alunos'))
        const list = []
        querySnapShot.forEach(doc =>{
            list.push({ ...doc.data(), id: doc.id})
        })
        setPage(list)
    },[])

    function deleteItem(id){
        deleteDoc(doc(db, 'alunos', id))
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Delete
            </Text>
            <FlatList
                data={page}
                renderItem = {({item})=>{
                    return(
                        <View style={styles.pageDelete}>
                            <TouchableOpacity 
                            style={styles.deleteItem}
                            onPress={()=>{deleteItem(item.id)}}
                            >
                                <FontAwesome
                                    name='trash'
                                    size={25}
                                    color='#ff0'
                                />
                            </TouchableOpacity>
                            <Text style={styles.txtDelete}>
                                {item.name}   
                            </Text>
                            <Text style={styles.txtDelete}>
                                {item.email}   
                            </Text>
                        </View>    
                    )}}
            />
        </View>
    )
}