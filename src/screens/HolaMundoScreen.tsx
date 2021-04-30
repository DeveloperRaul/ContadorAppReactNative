import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#0e2433',
            justifyContent: 'center'
          }}>
            <Text style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 45
            }}>
              Hola Raúl!
            </Text>
          </View>
    )
}
