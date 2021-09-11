// DOM elements
const followButton = document.querySelector('.follow-btn');
const followTxt = document.querySelector('.follow-txt');
const notificationIcon = document.querySelector('.follow-notification');
const notificationBox = document.querySelector('.notification-box');
const checkIcon = document.querySelectorAll('.check');

// Init text content
followTxt.innerText = 'Suivre';

// Event listener
followButton.addEventListener('click', setFollowBtn);
checkIcon.forEach(icons => icons.addEventListener('click', chooseItem));
notificationIcon.addEventListener('click', () => {
  notificationBox.classList.toggle('show');
});

function setFollowBtn() {
  followButton.classList.toggle('abonnements');
  followTxt.innerText = 'Abonnements';

  if (followButton.classList.contains('abonnements')) {
    // Show notif btn
    notificationIcon.style.display = 'block';
  } else {
    // Mask notif btn
    notificationIcon.style.display = 'none';
  }

  // Gestion de la reponse de l'utilisateur
  if (!followButton.classList.contains('abonnements')) {
    // Get user answer
    const answerUser = confirm('Ne plus suivre ce compte ?');

    if(answerUser && !followButton.classList.contains('abonnements')) {
      followTxt.innerText = 'Suivre';
      notificationIcon.style.display = 'none';
      notificationBox.classList.remove('show');
    } else {
      followButton.classList.toggle('abonnements');
      followTxt.innerText = 'Abonnements';
      notificationIcon.style.display = 'block';
    }

    // Reset choose Item
    if(!notificationBox.classList.contains('show')) {
      checkIcon.forEach(icons => icons.classList.remove('active'));
      checkIcon[0].classList.add('active');
    }
  }
}

function chooseItem() {
  // Start to remove active class
  checkIcon.forEach(icons => icons.classList.remove('active'));
  // Add the active class to the element being read
  this.classList.add('active');
}

// ====== Local Storage Handle ========= //