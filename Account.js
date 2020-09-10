import React from'react';

export default function Account(prop){
    return(
        <div>
            <h4>
                {prop.text.name} <br/>
                {prop.data}
            </h4>
        </div>
    );
}