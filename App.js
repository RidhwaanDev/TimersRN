import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

import uuidv4 from 'uuid/v4'
import Timer from './utils/time'

export default class App extends React.Component {
    // state of timers. start of with two
    constructor(props){
        super(props);
        this.handleStartStop = this.handleStartStop.bind(this);
    }
    state = {
        timerCount : 0,
        timers: [
            {
                title : 'Timer 1',
                id : uuidv4(),
                time : new Timer(),
                elapsed : '00:00:00',
                isRunning : false,
            },
        ],

    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentDidMount() {
        const TIME_INTERVAL = 1000;
        this.intervalId = setInterval(() => {
            const {timers} = this.state;
            this.setState({
                timers : timers.map(timer => {
                    const {isRunning, elapsed , time } = timer;
                    return{...timer , elapsed : isRunning ? time.tick() : elapsed}
                }),
            });
        }, TIME_INTERVAL);
    }

    newTimer = (timer = {}) => {
        const { timers} = this.state;
        return {
            title : timer.title,
            id: uuidv4(),
            time: new Timer(),
            elapsed : '00:00:00',
            isRunning: false,
        };
    };

    handleStartStop (data)  {
        const {timers} = this.state;
        let index = 0;
        for(let i = 0; i < timers.length; i++){
            if(timers[i].id === data.id){
                if(data.reset === 'delete'){
                    // delete the timer
                    const allTimers = [...this.state.timers];
                    allTimers.splice(i, 1);
                    this.setState({timers: allTimers});
                    return;
                }
                else if(data.reset){
                    // reset the timer
                    const timerToUpdate = [...this.state.timers];
                    timerToUpdate[i].time = new Timer();
                    timerToUpdate[i].elapsed = "00:00:00";
                    this.setState({timers : timerToUpdate});
                    return;
                } else {
                    // start/stop the timer
                    index = i;
                }

            }
        }
        if(index < 0) {
            console.warn("index is -1 for some reason");
            return;
        }

        const timerToUpdate = [...this.state.timers];
        // switch boolean value
        timerToUpdate[index].isRunning  = !timerToUpdate[index].isRunning;
        this.setState({timers : timerToUpdate});
    };


    handleCreateFormSubmit = (timer) => {
        // spread operator
        const {timers}  = this.state;
        this.setState({timers: [this.newTimer(timer), ...timers]})
    };

    render(){
        const {timers} = this.state;
        return(
            <View style = {styles.appContainer} >
                <View style = {styles.titleContainer}>
                    <Text style ={styles.title}> Timers </Text>
                </View>

                <ScrollView style = {styles.timerList}>
                    <ToggleableTimerForm isOpen = {false} onFormSubmit = {this.handleCreateFormSubmit}/>
                    { timers.map(
                        ({ title, project, id, elapsed, isRunning }) => (
                            <EditableTimer
                                key={id}
                                id={id}
                                title={title}
                                project={project}
                                elapsed={elapsed}
                                isRunning={isRunning}
                                onPress = {this.handleStartStop}
                            />
                        ),)
                    }
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    appContainer: {

        backgroundColor: '#1b0a37',
        flex: 1,
    },
    titleContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
    }, title: {
        color : 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    timerList: {
        paddingBottom: 15,
    },
});
