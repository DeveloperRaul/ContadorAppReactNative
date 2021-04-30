import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Box Object Model</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        color: '#fff',
        paddingVertical:20,
        paddingHorizontal: 70,
        marginLeft: 30,
        fontSize: 20,
        backgroundColor: '#04090D'
    }

});
