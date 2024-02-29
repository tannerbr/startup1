function loadTalks() {
  let talksList = [];
  const talkTitle = localStorage.getItem('talks');
  if (talkTile) {
    scores = JSON.parse(talkTitle);
  }

  const tableBodyEl = document.querySelector('#talk');

  if (talksList.length) {
    for (const [i, talk] of talksList.entries()) {
      const nameTdEl = document.createElement('td');
      const linkTdEl = document.createElement('td');

      nameTdEl.textContent = talk.name      
      //linkTdEl.textContent = talk.talk;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(nameTdEl);
      //rowEl.appendChild(linkTdEl);
      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to suggest a talk</td></tr>';
  }
}

loadTalks();
