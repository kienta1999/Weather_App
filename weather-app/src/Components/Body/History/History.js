import React, { useState } from 'react';

function History(){
    let history = null
    if(localStorage.getItem('query'))  history = JSON.parse(localStorage.getItem('query'));
    if(history == null){
        return(
            <div>
                <h3>You did not search for anything</h3>
            </div>
        );
    }
    else{
        let items = history.map(
            ({query, date}) => {
                return(<h3>Your query: {query}, searched at {date}</h3>);
            }
        );
        return (
            <div>
                {items}
            </div>
        )
    }
    
}
export default History;