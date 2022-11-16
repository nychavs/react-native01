import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Styles from './styles'
import {auth, logInWithEmailAndPassword }from "./firebaseConfig"
import Create from '../create'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/nay.png'


export default function Login ({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [user, loading, error] = useAuthState(auth)
  
  const navigate = useNavigation()
  
  useEffect (() =>{
    if(loading){
      return;
    }
    if(user) navigate.navigate(Create)
  }), [user, loading]
  
  const loginFirebase = () => {
    console.log(email)
    console.log(password)
    logInWithEmailAndPassword(email, password)
    // console.log(email)
    // auth.signInWithEmailAndPassword(email, password)
    // console.log("LOGOU")
    // .then((userCredential)=>{
      //     let user = userCredential.user;
      //     navigation.navigate('Create')
      // })
    }
    // const colorList = [
  //   {offset: '0%', color: 'rgba(81,169,219,1)'}, 
  //   {offset: '51%', color: 'rgba(163,209,236,1)'}, 
  //   {offset: '87%', color: 'rgba(234,245,255,1)'}
  // ]
  return ( 
    <View style={Styles.container}>
      <LinearGradient
        colors={['rgba(81,169,219,1)', 'rgba(163,209,236,1)','rgba(234,245,255,1)']}
        degree={90}
        start={{ x: 0, y: 0 }}
        style={styles.linearGradient}>
      <img src={Logo} style={styles.imgLogo}></img>
          </LinearGradient>
        <View style={Styles.inputContainer}>
        <Text style={styles.TextInput}>CPF do Titular</Text>
      <TextInput
        style={Styles.txtInput1}
        placeholder='Digite apenas números'
        keyboardType='text'
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.TextInput}>Senha Digital</Text>
      <TextInput 
        style={Styles.txtInput1}
        placeholder='Senha de 8 dígitos'
        keyboardType='password'
        value={password}
        onChangeText={(text)=>setPassword(text)}
        />
      <View style={Styles.botoes}>
        <TouchableOpacity
          style={Styles.botaoLogin}
          onPress={()=>loginFirebase()}
          >
          <Text style={styles.txtButton}>Entrar</Text>
        </TouchableOpacity>
          </View>
      </View>
          <View>
            <Text style={styles.txtClick}>Esqueci a senha</Text>
            <Text style={styles.txtClick2}>Primeiro Acesso</Text>
            <Text style={styles.txtClick2}>Pedir meu cartão MONAY</Text>
            </View>
    </View>
  )
}