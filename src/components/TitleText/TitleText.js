import React from 'react';

import { MyHeader } from '../AppHeader/AppHeader.js';
import { DisplayTask} from '../CheckContent/CheckContent.js';
import { DisplayCounter} from '../Counter/Counter.js';
import { DisplayDynamicList} from '../DynamicList/DynamicList.js';
import { DisplayTaskList } from '../TaskList/TaskList.js';
import { title } from './TitleText.module.scss';
export const TitleText = () => (
  <><h1 className={`${title} bg-dark`}>Hello on team-homepage</h1><MyHeader /><DisplayTask /><DisplayCounter/><DisplayDynamicList n={4}/>{/*<DisplayTaskList/>*/}</>
);
