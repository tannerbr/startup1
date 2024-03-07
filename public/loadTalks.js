// Change for service 
async function loadTalks() {
  let talksList = [];
  try {
    // Get the latest high talks from the service
    const response = await fetch('/api/talks');
    talksList = await response.json();
    // Save the talks in case go offline in the future
    localStorage.setItem('talks', JSON.stringify(talksList));
  } catch {
    // If error use the last saved talks
    const talksText = localStorage.getItem('talks');
    if (talksText) {
      talksList = JSON.parse(talksText);
    }
  }
  displayTalks(talksList);
}
function displayTalks(talksList) {
  const tableBodyEl = document.querySelector('#talks');
  if (talksList.length) {
    // Update the DOM with talks
    for (const [i, talk] of talksList.entries()) {
      const nameTdEl = document.createElement('td');
      const linkTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      nameTdEl.textContent = talk.talkTitle;
      linkTdEl.textContent = talk.talkLink;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(linkTdEl);
      tableBodyEl.appendChild(rowEl);

    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to suggest a talk</td></tr>';
  }
}
loadTalks();


// old code before service
// function loadTalks() {
//   let talksList = [];
//   const talkTitle = localStorage.getItem('talks');
//   if (talkTitle) {
//     talksList = JSON.parse(talkTitle);
//   }

//   const tableBodyEl = document.querySelector('#talks');

//   if (talksList.length) {
//     for (const [i, talk] of talksList.entries()) {
//       const nameTdEl = document.createElement('td');
//       const linkTdEl = document.createElement('td');

//       nameTdEl.textContent = talk.talkTitle;
//       linkTdEl.textContent = talk.talkLink;  

//       const rowEl = document.createElement('tr');
//       rowEl.appendChild(nameTdEl);
//       rowEl.appendChild(linkTdEl);
//       tableBodyEl.appendChild(rowEl);
//     }
//   } else {
//     tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to suggest a talk</td></tr>';
//   }
// }

// loadTalks();
