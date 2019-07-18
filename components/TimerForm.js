import React from 'react';
import { TimePickerAndroid, StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton'

export default class TimerForm extends React.Component{
    handleSubmit = () => {
        const {onFormSubmit, id, title} = this.props;
        onFormSubmit({id,title});
    };
    render(){
        const {onFormClose} = this.props;
        return (
            <View style={styles.formContainer}>
                <View style={styles.attributeContainer}>
                    <Text style={styles.textInputTitle}> Title </Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid= "transparent"
                            defaultValue= "Title of your new timer"
                        />
                    </View>
                </View>
                <View style={styles.buttonGroup}>
                    <TimerButton small  title="Create" onPress={this.handleSubmit}/>
                    <TimerButton small  title="Cancel" onPress ={onFormClose}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#3c3861',
        borderRadius: 5,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        marginBottom: 5,
    },
    textInput: {
        backgroundColor : 'white',
        height: 30,
        padding: 5,
        fontSize: 12,
        borderRadius : 15,
    },
    textInputTitle: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});