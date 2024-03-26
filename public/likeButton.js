// add event listener for click
// plus 1 at event
// local Storage.setItem (saves like in local storage)
// in localStorage.getItem (for allTalks.html)

var likeCount = localStorage.getItem('likeCountStored');
var likeCountInt = parseInt(likeCount) || 0;
var userClicked = localStorage.getItem(userClicked);
const likeButton = document.querySelector('#likeButton');
var showLikeCount = document.getElementById('showLikeCount');
var socket;

// Event messages
const likeEvent = 'likeEvent';

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
        displayMsg('system', 'talk', 'connected');
    };
    this.socket.onclose = (event) => {
        displayMsg('system', 'talk', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === TalkEndEvent) {
        displayMsg('user', msg.from, `liked this talk`);
        } else if (msg.type === TalkStartEvent) {
        displayMsg('user', msg.from, `started watching`);
        }
    };
    return socket;
}



function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

// when like button is hit
  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

let wSocket = configureWebSocket();

async function clickFunc(event){
    //event.stopPropagation();
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

likeButton.addEventListener('click', clickFunc); 

function tableFunc() {
    var tableLikes = localStorage.getItem(likeCountInt);
}








