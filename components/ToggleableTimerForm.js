import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimerButton from './TimerButton'; import TimerForm from './TimerForm';
export default class ToggleableTimerForm extends React.Component {
    state = { isOpen : false };
    /*
   handleFormOpen is a property initializer ( arrrow function ) to ensure that this inside of the
   function is bound to the component
     */
    handleFormOpen = () => {
     this.setState({isOpen: true});
    };
    handleFormClose = () => {
        this.setState({isOpen:false});
    };
    handleFormSubmit = (timer) => {
        const {onFormSubmit} = this.props;
        onFormSubmit(timer);
        this.setState({isOpen: false});
    };

    render(){
        const {isOpen} = this.state;
        return (
            <View style={[styles.container, !isOpen && styles.buttonPadding]}>
                { isOpen ? (
                    <TimerForm
                        title = "Title of your new timer"
                        onFormSubmit={this.handleFormSubmit}
                        onFormClose = {this.handleFormClose}
                /> ) : ( <TimerButton title = "+" color="#3A88C4" isAdd = {true} onPress={this.handleFormOpen} />)
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({ container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});