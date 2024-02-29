function suggestTalkFunc() {
    const talkElement = document.querySelector("#talks");
    localStorage.setItem("talk", talkElement.value);
    window.location.href = "suggestTalk.html";
  }
  
function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery User';
}

const playerNameEl = document.querySelector('.user-name');
    playerNameEl.textContent = this.getUserName();