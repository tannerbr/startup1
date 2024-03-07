// var userClicked = localStorage.getItem("userClicked") 
// if (userClicked === null) {
//   userClicked = false;  
// }

function login() {
    const nameElement = document.querySelector("#name");
    localStorage.setItem("userName", nameElement.value);
    window.location.href = "suggestTalk.html";
    // implement checking user for repeat likes for database and login section

    const passwordElement = document.querySelector("#password");
    localStorage.setItem("userPassword", passwordElement.value);
    window.location.href = "suggestTalk.html";

    const emailElement = document.querySelector("#email");
    localStorage.setItem("userEmail", emailElement.value);
    window.location.href = "suggestTalk.html";

    //localStorage.setItem("userClicked", userClicked);
  }