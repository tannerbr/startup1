function loadLikes() {
    let likes = [];
    const likesText = localStorage.getItem('likes');
    if (likesText) {
      likes = JSON.parse(likesText);
    }
  
    const tableBodyElement = document.querySelector('#likes');
  
    if (likes.length) {
      for (const [i, score] of scores.entries()) {
        const talkElement = document.createElement('td');
        const likeElement = document.createElement('td');

        talkElement.textContent = score.name;
        likeElement.textContent = score.score;
  
        const rowElement = document.createElement('tr');
        rowElement.appendChild(talkElement);
        rowElement.appendChild(likeElement);
  
        tableBodyElement.appendChild(rowEl);
      }
    } else {
        tableBodyElement.innerHTML = '<tr><td colSpan=4>Be the first to like the video!</td></tr>';
    }
  }
  
  loadLikes();