import React from 'react';

import { DisplayTask} from '../components/CheckContent/CheckContent.js';
import { DisplayCounter} from '../components/Counter/Counter.js';
import { DisplayDynamicList} from '../components/DynamicList/DynamicList.js';
import { SimpleForm } from '../components/SimpleForm/SimpleForm.js';
import { DisplayTaskList } from '../components/TaskList/TaskList.js';
import { TitleText } from '../components/TitleText/TitleText.js';
const listOfTasks = [{id:1, txt:"Task 1"},{id:2, txt:"Task 2"},{id:3, txt:"Task 3"},{id:4, txt:"Task 4"},{id:5, txt:"Task 5"}];
const IndexPage = () => (
  <>
    <TitleText />
    <DisplayTask />
    <DisplayCounter/>
    <DisplayDynamicList n={4}/>
    <DisplayTaskList tasks={listOfTasks}/>
    <SimpleForm/>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
