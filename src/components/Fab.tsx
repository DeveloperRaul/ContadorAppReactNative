import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

interface PropsFab {
    title: string;
    position?: 'bl' | 'br';
    onPress: () => void;
}

export const Fab = ({ title, position = 'br', onPress }: PropsFab) => {

    const ios = () => {
        return (
            <TouchableOpacity
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                ]}
                activeOpacity={0.75}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        ) 
    }

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                ]}>
    
                <TouchableNativeFeedback
                    background={ TouchableNativeFeedback.Ripple('black', false, 30) }
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();

    
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: '#4F5F73',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8
    },
    fabText: {
        color: '#A7C6D9',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});