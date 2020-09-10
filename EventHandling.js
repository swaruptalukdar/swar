import React from'react';
import EventwithFunction from './EventwithFunction';

class EventHandling extends React.Component{
    red(){
        alert("alert swarup")
    }
    render(){
        return (
            <div>
                <button onClick={()=>this.red()}>Click me</button>
                <EventwithFunction/>
                </div>
        )
        }   
}
export default EventHandling;