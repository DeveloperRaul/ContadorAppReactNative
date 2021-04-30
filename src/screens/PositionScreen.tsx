import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaVerde}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#672E8C'
    },
    cajaMorada: {
        backgroundColor: '#5549A6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        top: 0,
        left: 0
    },
    cajaVerde: {
        backgroundColor: '#A0A603',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        top: 0
    }
});
