function login() {
    const nameElement = document.querySelector("#name");
    localStorage.setItem("userName", nameElement.value);
    window.location.href = "suggestTalk.html";

    const passwordElement = document.querySelector("#password");
    localStorage.setItem("userPassword", passwordElement.value);
    window.location.href = "suggestTalk.html";

    const emailElement = document.querySelector("#email");
    localStorage.setItem("userName", emailElement.value);
    window.location.href = "suggestTalk.html";
  }