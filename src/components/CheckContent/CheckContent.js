import React, { useState } from 'react';

import {Switcher} from './CheckContent.module.scss';
import {dt1} from './CheckContent.module.scss';
import {SwitchableParagraph} from './CheckContent.module.scss';

export function DisplayTask() {

  const [turnedOn, setOn] = useState(false);

  function switchText () {
    if (!turnedOn) {
      setOn(true);
      document.getElementById(SwitchableParagraph).style.borderColor='green';
    } else {
      setOn(false);
      document.getElementById(SwitchableParagraph).style.borderColor='red';
    }

  }
    return (
      <><div className={`${dt1}`}>
          <p id={`${SwitchableParagraph}`}>{turnedOn ? 'Turned on' : 'Turned off'}</p>
          <button id={`${Switcher}`} onClick={switchText}>{turnedOn ? 'Turn off' : 'Turn on'}</button>
        </div>
        <hr></hr>
        </>
        
    );
  }