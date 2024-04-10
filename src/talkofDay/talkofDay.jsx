import React from 'react';

import { Users } from './users';
import { SimonGame } from './simonGame'; // what do I call here?

export function talkofDay(props) {
  return (
    <main className='bg-secondary'>
      <Users userName={props.userName} />
      <SimonGame userName={props.userName} />
    </main>
  );
}
