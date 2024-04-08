// async function loadTalks() {  
//   try {
//     // Get the latest high talks from the service
//     const response = await fetch('/api/talks');
//     talksList = await response.json();
//     // Save the talks in case go offline in the future
//     console.log(talksList);
//     localStorage.setItem('talks', JSON.stringify(talksList));
//   } catch {
//     // If error use the last saved talks
//     const talksText = localStorage.getItem('talks');
//     if (talksText) {
//       talksList = JSON.parse(talksText);
//     }
//   }
// }

function getTalkTitle() {
  const talkElement = document.querySelector("#talks");
  return talkElement.value;
}

function getLink() {
  const linkElement = document.querySelector("#links");
  return linkElement.value;
}

function saveTalk() {
  const talkTitle = getTalkTitle();
  const talkLink = getLink();
  const talkObject = { talkTitle, talkLink };


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
      console.log('Talk saved successfully:', updatedTalkList);
      loadTalks(); // Reload talks after saving
  })
  .catch(error => {
      console.error('There was a problem saving the talk:', error);
  });
}

function displayTalks(talksList) {
  const tableBodyEl = document.querySelector('#talks');
  tableBodyEl.innerHTML = ''; // Clear existing content
  if (talksList.length) {
      for (const [i, talk] of talksList.entries()) {
          const nameTdEl = document.createElement('td');
          const linkTdEl = document.createElement('td');
          const positionTdEl = document.createElement('td'); // Add position element

          positionTdEl.textContent = i + 1;
          nameTdEl.textContent = talk.talkTitle;

          // Create anchor element for the link
          const linkAnchorEl = document.createElement('a');
          linkAnchorEl.href = talk.talkLink;
          linkAnchorEl.textContent = talk.talkLink;
          linkTdEl.appendChild(linkAnchorEl);

          const rowEl = document.createElement('tr');
          rowEl.appendChild(positionTdEl);
          rowEl.appendChild(nameTdEl);
          rowEl.appendChild(linkTdEl);
          tableBodyEl.appendChild(rowEl);
      }
  } else {
      tableBodyEl.innerHTML = '<tr><td colspan="3">Be the first to suggest a talk</td></tr>';
  }
}
  
function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery User';
}

const playerNameEl = document.getElementById('user-name');
    playerNameEl.textContent = this.getUserName();

const linkNameEl = document.querySelector('#links');
    linkNameEl.textContent = this.getLink();


window.onload = () => {
  loadTalks();
  displayTalks();

}
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




