import React from 'react';
import { Users } from './users';
//import { SimonGame } from './simonGame'; // what do I call here?


export function TalkofDay(props) {
  var userName = localStorage.getItem('userName');
  const likeEvent = 'likeEvent';
  
  console.log("in configWS")
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  socket.onopen = (event) => {
      console.log("in onopen");
      displayMsg('system', 'talk', 'connected');
  };
  socket.onclose = (event) => {        displayMsg('system', 'talk', 'disconnected');
  };
  socket.onmessage = async (event) => {
      console.log("talk liked");
      const msg = JSON.parse(await event.data.text());
      displayMsg('user', msg.from, `liked this talk`);
      // if (msg.type === TalkStartEvent) {
      // displayMsg('user', msg.from, `started watching`);
      // }
  };

  function displayMsg(cls, from, msg) {
    console.log("in display msg");
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
      
  }

  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    socket.send(JSON.stringify(event));
  }

  var userClicked = localStorage.getItem(userClicked);
  var likeCount = localStorage.getItem('likeCountStored');
  var likeCountInt = parseInt(likeCount) || 0;
  event.stopPropagation();
  async function clickFunc(event){
    event.stopPropagation();
    if (userClicked === false) {
        likeCountInt = likeCountInt + 1;
        userClicked = true;
    } //save for database section
    likeCountInt = likeCountInt + 1;
    console.log(likeCountInt);
    showLikeCount.innerHTML = likeCountInt;
    console.log(likeCountInt);
    localStorage.setItem('likeCountStored', likeCountInt);
    console.log(likeCountInt);
    broadcastEvent(userName, likeEvent);
}
  return (
    <main className='bg-secondary'>
      <Users userName={props.userName} />
      <div className='talkJSX'></div>
      
        <div className="fixedContent">
        <h1>Here is the Talk of the day!</h1>
        <br></br>
        <iframe className="video" width="600" height="400" src="https://www.youtube.com/embed/ZghD9LplPug" title="Think Celestial! | Russell M. Nelson | October 2023 General Conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>Likes: </p>
        <p id="showLikeCount"></p>
        <button onClick={clickFunc} id="likeButton" className="btn btn-primary">Like</button>
    </div>
    </main>
  );
}
