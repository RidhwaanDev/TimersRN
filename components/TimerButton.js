import{StyleSheet,Text,TouchableOpacity}from'react-native';
import React from'react';
export default function TimerButton({   color,
                                        title,
                                        small,
                                        isAdd,
                                        onPress,
                                    }){
    return (
    <TouchableOpacity
        style={[styles.button, {backgroundColor : color}, isAdd && styles.round]}
        onPress={onPress} >
        <Text style = {[ styles.buttonText, small ? styles.small : styles.large, { color : 'white'}, ]} >
            {title}
        </Text>
    </TouchableOpacity>
); }
const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        minWidth: 100,
        borderRadius: 3,
    },
    small: {
        color : 'white',
        fontSize: 14,
        padding: 5,
    },
    large: {
        color : 'white',
        fontSize: 16,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    round : {
        borderRadius: 50,
    },
    elapsedTime: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
});