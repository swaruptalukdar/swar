import React from 'react';
//import App from './App';

function EventwithFunction(){
    const blue=()=>{
      
       alert("blue function event on click");
          
        
    }
    return(
        <div>
           
            <button onClick={blue}>app</button>
        </div>
    )
}
export default EventwithFunction;