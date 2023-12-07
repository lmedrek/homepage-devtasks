/* eslint-disable react/prop-types */
import './TaskList.module.scss';

import React from 'react';

export function DisplayTaskList({tasks}){
    
    const drawX= (pressed) =>{
        const buttonID = pressed.target.id;
        if(document.getElementById(buttonID).innerHTML){document.getElementById(buttonID).innerHTML="";document.getElementById(buttonID.slice(0,-3)).style.textDecoration="none";} 
        else{document.getElementById(buttonID).innerHTML='✓';document.getElementById(buttonID.slice(0,-3)).style.textDecoration="line-through";}
    }

    function DisplayTaskList(){
        const content=[];
        tasks.forEach(element => {
            content.push(<><div style={{display: "flex", alignItems: "center", justifyContent:"center"}}><li id={element.id}>{element.txt}</li> <button id={element.id+"box"} onClick={drawX}></button></div></>);
        });
        return content;
    }
    
    return(
        <><div><ol>{DisplayTaskList()}</ol></div><hr></hr></>
    );
}