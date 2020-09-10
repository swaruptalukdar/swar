import React from 'react';
export default function Profile(prop){
    const green=()=>{
        alert("green function called")
    }
    return<div>
       <h2 onClick={green}>{prop.text}</h2>
    </div>
}