import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
            <View style={styles.container}>
                <View style={{...styles.cajaMorada, height: height * 0.50}}>

                </View>
                <View style={{...styles.cajaVerde, height: height * 0.25}}>

                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#672E8C',
        width: '100%',
        height: '100%'
    },
    cajaMorada: {
        backgroundColor: '#5549A6',
        width: '50%',
        height: '50%'
    },
    cajaVerde: {
        backgroundColor: '#A0A603',
        width: '50%',
        height: '50%'
    },
    title: {
        fontSize: 25,
        color: '#fff'
    }
});
