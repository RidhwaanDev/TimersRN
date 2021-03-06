import moment from 'moment'

function Timer(){
    this.step = 0;
}

Timer.prototype.tick = function(){
    return moment().hour(0).minutes(0).second(this.step++).format('HH:mm:ss');
};

Timer.prototype.value = function(){
     return moment().hour(0).minutes(0).second(this.step).format('HH:mm:ss');
};

Timer.prototype.idToNum = function(id){
    let sum = 0;
    for(let i = 0; i < id.length; i++){
       sum += id.charCodeAt(i);
    }
    return sum;
};

module.exports = Timer;

// export function getTime(){
//     let time = moment().hour(0).minute(0).second(counter++).format('HH : mm : ss');
//     return time.toString();
// }

