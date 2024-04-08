import React from 'react';

import { Users } from './users';
import { SimonGame } from './simonGame'; // what do I call here?

export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <SimonGame userName={props.userName} />
    </main>
  );
}
