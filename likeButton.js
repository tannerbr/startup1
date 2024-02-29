// add event listener for click
// plus 1 at event
// local Storage.setItem (saves like in local storage)
// in localStorage.getItem (for allTalks.html)

var likeCount = localStorage.getItem('likeCountStored');
var likeCountInt = parseInt(likeCount) || 0;
//var userClicked = localStorage.getItem(userClicked);
const likeButton = document.querySelector('#likeButton');
var showLikeCount = document.getElementById('showLikeCount');

function clickFunc(event){
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





