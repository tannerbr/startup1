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
    //let talkList = []; REPLACE WITH DATABASE
    // const talks = localStorage.getItem('talks');
    // if (talks) {
    //   talkList = JSON.parse(talks);
    // }
    // talkList.push(talkObject);
    fetch() // use post to get talks, send JSON to
    
    // item in local storage = what fetch returns

    // localStorage.setItem('talks', JSON.stringify(talkList));
      fetch('/api/talks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(talkObject),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(updatedTalkList => {
        // Handle the updated talk list if needed
        console.log('Talk saved successfully:', updatedTalkList);
        // Optionally update UI or perform other actions
    })
    .catch(error => {
        // Handle errors here
        console.error('There was a problem saving the talk:', error);
    });


   
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
  fetch('https://api.quotable.io/random?tags=religion|Bible')
  
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

