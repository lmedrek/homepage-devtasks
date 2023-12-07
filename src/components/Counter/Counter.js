import React, { useState } from 'react';

import {counterValue} from './Counter.module.scss';
import {counterButton} from './Counter.module.scss';
import {insideParagraph} from './Counter.module.scss';


export function DisplayCounter() {

  var [count, Set] = useState(0);

  function increment () {
    Set(++count)
  }
  function decrement () {
    if(count>0) Set(--count);
  }
    return (
      <><div id={`${counterValue}`}>
          <p id={`${insideParagraph}`}>{count}</p><br></br><div><button className={`${counterButton}`} onClick={decrement}>Decrease</button><button className={`${counterButton}`} onClick={increment}>Increase</button></div>
        </div>
        <hr></hr>
        </>
        
    );
  }