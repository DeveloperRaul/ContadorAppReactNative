import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={ styles.textCounter }>
                Contador: { contador }
            </Text>

            <Fab 
                title='-1'
                position='bl'
                onPress={() => setContador(contador - 1)}
            />

            <Fab 
                title='+1'
                position='br'
                onPress={() => setContador(contador + 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#04090D',
        flex: 1,
        justifyContent: 'center'
    },
    textCounter: {
        textAlign: 'center',
        fontSize: 40,
        top: -15,
        color: '#fff'
    }
});