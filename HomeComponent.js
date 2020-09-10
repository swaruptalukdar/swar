import React from 'react';
import EventHandling from './EventHandling';

class HomeComponent extends React.Component{
    constructor(){
        super()
        this.state={
            name: 'Peter',
            email: 'peter@test.com',
            count: 0,
            show: true
        }
     }

    componentDidMount(){
        console.warn("component life cycle")
    }

    updateState(data){
        this.setState({
            name: data,
            count: this.state.count+1
           
        })
    }
    render(){
        console.warn('render')
        return(
        <div>
           

            <h1>Home Class Component  state {this.state.name}</h1>
            <h2>{this.state.email}
            <br/>
            {this.props.text.roll}</h2>
            <h5>{this.props.data}</h5>
            <input type='text' id='nameup'></input>
            <button onClick={()=>{this.updateState(input.data)}}>Update name</button>
            <h5>Button clicked : {this.state.count}</h5>
            
            {
           this.state.show? 
           <h5>Show or hide</h5>:
           null
            }
            <button onClick={()=>{this.setState({show: !this.state.show})}}>Toggle text</button>
            <EventHandling/>

        </div>
        )
    }
}

export default HomeComponent;