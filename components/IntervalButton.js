import{StyleSheet,Text,TouchableOpacity}from'react-native';
import React from'react';
import View from "react-native-web/dist/exports/View";
export default function IntervalButton({title,
                                        small,
                                        onPress,
                                    }){ return (
        <TouchableOpacity
            style={ styles.button }
            onPress={onPress} >
            <Text style={[ styles.buttonText, small ? styles.small : styles.large, ]} >
                {title}
            </Text>
        </TouchableOpacity>
); }
const styles = StyleSheet.create({
    button: {
        backgroundColor : '#30d2a4',
        marginTop: 10,
        minWidth: 100,
        borderRadius: 3,
    },
    small: {
        fontSize: 14,
        padding: 5,
    },
    large: {
        fontSize: 16,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
});