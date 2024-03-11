// add event listener for click
// plus 1 at event
// local Storage.setItem (saves like in local storage)
// in localStorage.getItem (for allTalks.html)

var likeCount = localStorage.getItem('likeCountStored');
var likeCountInt = parseInt(likeCount) || 0;
//var userClicked = localStorage.getItem(userClicked);
const likeButton = document.querySelector('#likeButton');
var showLikeCount = document.getElementById('showLikeCount');

async function clickFunc(event){
    event.stopPropagation();
    // if (userClicked === false) {
    //     likeCountInt = likeCountInt + 1;
    //     userClicked = true;
    // } save for database section
    likeCountInt = likeCountInt + 1;
    console.log(likeCountInt);
    showLikeCount.innerHTML = likeCountInt;
    console.log(likeCountInt);
    localStorage.setItem('likeCountStored', likeCountInt);
    console.log(likeCountInt);
}

likeButton.addEventListener('click', clickFunc); 

function tableFunc() {
    var tableLikes = localStorage.getItem(likeCountInt);
}



// USE THIS TO UPDATE LIKES????????
// updateScoresLocal(newScore) {
//     let scores = [];
//     const scoresText = localStorage.getItem('scores');
//     if (scoresText) {
//       scores = JSON.parse(scoresText);
//     }

//     let found = false;
//     for (const [i, prevScore] of scores.entries()) {
//       if (newScore > prevScore.score) {
//         scores.splice(i, 0, newScore);
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       scores.push(newScore);
//     }

//     if (scores.length > 10) {
//       scores.length = 10;
//     }

//     localStorage.setItem('scores', JSON.stringify(scores));
//   }





