import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, CheckBox} from 'react-native'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
import { db } from '../login/firebaseConfig'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { async } from '@firebase/util'
import { useIsFocused} from '@react-navigation/native'

import {FontAwesomeIcon, icon} from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

export default function Delete ({ navigation }) {
  const [page, setPage] = useState()
  const isFocused = useIsFocused();
  
    function deleteItem (id) {
      deleteDoc(doc(db, 'alunos', id))
      renderizar()
    }

    const renderizar = async () => {
      const querySnapShot = await getDocs(collection(db, 'alunos'))
      const list = []
      querySnapShot.forEach(doc => {
        list.push({...doc.data(),id: doc.id})
      })
      setPage(list)
    }

    useEffect(async () => {
      renderizar()
    }, [isFocused])

    const alterar = (id, status) => {
      page.find(x => x.id == id).status = !status
      setPage([...page])
      console.log(status)
    }

    const deletarSelecionados = () =>{
      page.forEach(item=>{
        if (item.status){
          deleteDoc(doc(db, "alunos", item.id))
        }
      }), renderizar()
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Delete</Text>

      <FlatList
        data={page}
        renderItem={({ item }) => {
          return (
            <View style={styles.pageDelete}>
              
              <CheckBox
                value = {item.status}
                onValueChange = {()=>alterar(item.id, item.status)}
              />

              <TouchableOpacity
                style={styles.deleteItem}
                onPress={() => {
                  deleteItem(item.id)
                }}
              >
                <FontAwesome name='trash' color='red' />
                </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteItem}
                onPress={() => {
                  deleteItem(item.id)
                }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  color='blue'
                  />
                </TouchableOpacity>

              <Text
                style={styles.txtDelete}
                onPress={() => {
                  navigation.navigate('Update', {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    email: item.email
                  })
                }}
              >
                {item.name}
              </Text>

              <Text
                style={styles.txtDelete}
                onPress={() => {
                  navigation.navigate('Update', {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    email: item.email
                  })
                }}
              >
                {item.email}
              </Text>
            </View>
          )
        }}
      />
      <View style={styles.bntContainer}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={deletarSelecionados}>
            <Text style={styles.txtButton}>Apagar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
0