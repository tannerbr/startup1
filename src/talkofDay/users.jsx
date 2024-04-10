import React from 'react';

import { likeEvent, likeNotifier } from './likeNotifier';
import './users.css';

export function Users(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    likeNotifier.addHandler(handleLikeEvent);

    return () => {
      likeNotifier.removeHandler(handleLikeEvent);
    };
  });

  function handleLikeEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === GameEvent.End) {
        message = `like this talk ${event.value.message}`;
      } else if (event.type === GameEvent.Start) {
        message = `started a new game`;
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'user-event'}>{event.from.split('-')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='users'>
      User
      <span className='user-name'>{userName}</span>
      <div id='user-messages'>{createMessageArray()}</div>
    </div>
  );
}
