// DOM elements
const followButton = document.querySelector('.follow-btn');
const followTxt = document.querySelector('.follow-txt');
const notification = document.querySelector('.follow-notification');

// Init text
followTxt.innerText = 'Suivre';

// Event listener
followButton.addEventListener('click', changeTextContent);

function changeTextContent() {
  followButton.classList.toggle('abonnements');
  followTxt.innerText = 'Abonnements';
  notification.style.display = 'block';

  if (!followButton.classList.contains('abonnements')) {
    const answerUser = confirm('Ne plus suivre ce compte ?');

    if(answerUser) {
      followTxt.innerText = 'Suivre';
      notification.style.display = 'none';
    } else {
      followButton.classList.toggle('abonnements');
      followTxt.innerText = 'Abonnements';
    }
  }
}