function getTalkTitle() {
    const talkElement = document.querySelector("#talks");
    return talkElement.value;
  }

function getLink() {
    const linkElement = document.querySelector("#links");
    return linkElement.value;
  }

function saveTalk(talk) {
    const talkTitle = getTalkTitle();
    const talkLink = getLink();
    let talkObject = {talkTitle, talkLink};
    let talkList = [];
    const talks = localStorage.getItem('talks');
    if (talks) {
      talkList = JSON.parse(talks);
    }
    talkList.push(talkObject);

    localStorage.setItem('talks', JSON.stringify(talkList));
  }
  
function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery User';
}

function getLink() {
    return localStorage.getItem('links') ?? 'No Link Given';
}

const playerNameEl = document.querySelector('.user-name');
    playerNameEl.textContent = this.getUserName();

const linkNameEl = document.querySelector('#links');
    linkNameEl.textContent = this.getLink();

function displayQuote(data) {
  fetch('https://api.quotable.io/random?tags=religion|Bible') // PUT 3RD PARTY WEBSITE HERE
  
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

displayQuote();

