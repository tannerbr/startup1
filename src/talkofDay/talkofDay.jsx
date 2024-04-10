import React from 'react';
import { Users } from './users';
//import { SimonGame } from './simonGame'; // what do I call here?

export function TalkofDay(props) {
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
      <div className="users">
        User:
        <span className="user-name"></span>
        <div id="user-messages"></div>
      </div>
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
