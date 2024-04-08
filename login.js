(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#userName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('suggestControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('suggestControls', 'none');
  }
})();

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ userName: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('userName', userName);
    window.location.href = 'suggest.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function suggest() {
  window.location.href = 'suggestTalk.html';
}

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(userName) {
  let talk = [];
  // See if we have a user with the given userName.
  const response = await fetch(`/api/user/${userName}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}


function setDisplay(controlId, display) {
  const suggestControlEl = document.querySelector(`#${controlId}`);
  if (suggestControlEl) {
    suggestControlEl.style.display = display;
  }
}
