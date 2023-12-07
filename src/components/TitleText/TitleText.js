import React from 'react';

import { MyHeader } from '../AppHeader/AppHeader.js';
import { title } from './TitleText.module.scss';

export const TitleText = () => (
  <><h1 className={`${title} bg-dark`}>Hello on team-homepage</h1><MyHeader /></>
);
