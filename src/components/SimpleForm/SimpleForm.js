import React, {useState} from 'react';

export function SimpleForm(){
  
    const [message, write] = useState('');

    function send(){
        var mail=document.getElementById('usermail').value;
        var uname=document.getElementById('username').value;
        var msg = uname+" "+mail;
        write(msg);
        console.log(message);
    }
    return(
        <> <input id="username" type='text' placeholder='Name'></input><br></br><input id="usermail" type='text' placeholder='E-mail'></input><br></br><button onClick={send}>Submit</button>  </>
    );
}