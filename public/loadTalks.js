// Change for service 
async function loadTalks() {
  let talks = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/talks');
    scores = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('talks', JSON.stringify(talks));
  } catch {
    // If there was an error then just use the last saved scores
    const talksText = localStorage.getItem('talks');
    if (talksText) {
      talks = JSON.parse(talksText);
    }
  }

  displayScores(talks);
}

function displayScores(talks) {
  const tableBodyEl = document.querySelector('#talks');

  if (talks.length) {
    // Update the DOM with the scores
    for (const [i, score] of scores.entries()) {
      const nameTdEl = document.createElement('td');
      const linkTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      nameTdEl.textContent = score.name;
      scoreTdEl.textContent = score.score;
      dateTdEl.textContent = score.date;

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
