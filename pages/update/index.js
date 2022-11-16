import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Update({route, navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Update
            </Text>
            <View>
                <text>{route.params.name}</text>
                <text>{route.params.email}</text>
            </View>
        </View>
    )
}