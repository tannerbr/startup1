function loadLikes() {
    let likes = [];
    const likesText = localStorage.getItem('likes');
    if (likesText) {
      likes = JSON.parse(likesText);
    }
  
    const tableBodyElement = document.querySelector('#likes');
  
    if (likes.length) {
      for (const [i, like] of likes.entries()) {
        const talkElement = document.createElement('td');
        const likeElement = document.createElement('td');

        talkElement.textContent = like.name;
        likeElement.textContent = like.score;
  
        const rowElement = document.createElement('tr');
        rowElement.appendChild(talkElement);
        rowElement.appendChild(likeElement);
  
        tableBodyElement.appendChild(rowElement);
      }
    } else {
        tableBodyElement.innerHTML = '<tr><td colSpan=4>Be the first to like the video!</td></tr>';
    }
  }
  
  loadLikes();