import React from 'react';
import { PanResponder, StyleSheet, View, Text, Picker } from 'react-native';
// import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';
export default function Timer({ title, id, elapsed,isRunning, onPress}) {
    const elapsedString = '3:45 seconds';
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.elapsedTime}>{elapsed}</Text>
            <Text style={styles.intervalText}> will vibrate every 5 minutes </Text>
            <TimerButton color="#30d2a4" title="Start" onPress={onPress(id)}/>
            <TimerButton color="#d0879e" title="Stop" onPress={onPress(id)}/>
        </View>
    ); }

const styles = StyleSheet.create({
    intervalText : {
        fontSize : 12,
        color : 'white',
        textAlign : 'center',
        fontStyle : 'italic',
    },
    timerContainer: {
        backgroundColor: '#3c3861',
        borderColor: '#d6d7da',
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 5,
    },
    title: {
        color : 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 32,
        marginBottom : 8,
        color : 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',},
});
