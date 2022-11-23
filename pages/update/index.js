import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Update({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Update
            </Text>
            <View style={styles.btn}>
                <TouchableOpacity 
                    title='Delete'
                    onPress={()=> navigation.navigate('Delete')}
                    style={styles.botao}
                >
                   <Text style={styles.txtButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}