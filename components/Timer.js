import React from 'react';
import { PanResponder, StyleSheet, View, Text, Picker } from 'react-native';
// import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
        this.onReset= this.onReset.bind(this);
    }

    onPress(){
        const {id, onPress} = this.props;
        onPress({id,onPress});
    }
    onReset(){
        const {id,onReset } = this.props;
        onPress({id,onReset});
    }
    render() {
      const { title , id , elapsed , isRunning , onPress }  = this.props;
      return(
          <View style={styles.timerContainer}>

              <Text style={styles.title}> {title} </Text>
              <Text style={styles.elapsedTime}>{elapsed}</Text>
              <Text style={styles.intervalText}> will beep every 5 minutes </Text>
              { !isRunning &&  <TimerButton color= {colors.greenStart} title="Start" onPress={this.onPress} /> }
              { isRunning &&  <TimerButton color= {colors.redStop} title="Stop" onPress={this.onPress} /> }
              <TimerButton color={colors.orangeReset} title="Reset" />
          </View>
      )
   }
}

const colors = {
    greenStart :"#30d2a4",
    redStop : "#d0879e",
    orangeReset: "#dd9449"
};

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
