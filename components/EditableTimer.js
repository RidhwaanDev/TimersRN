import React from 'react'
// no editable timer cuz im lazy
// functional components useful if only implementing render()
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component
{
    constructor(props){
        super(props);

    }
    state = {
        editFormOpen : false
    };

    render(){
        const {id,title,project,elapsed,isRunning, onPress } = this.props;
        return (
            <Timer
                id = {id}
                title =     {title}
                project =   {project}
                elapsed =   {elapsed}
                isRunning = {isRunning}
                onPress =   {onPress}
            />
        );
    }
    // const {editFormOpen} = this.state;
    // if(editFormOpen){
    //     return <TimerForm id = {id} title = {timer} project = {project}/>
    // }
}

