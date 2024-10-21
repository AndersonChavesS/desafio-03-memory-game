const emojis = [
  ' 🎠',
  ' 🎠',
  ' 🎃',
  ' 🎃',
  ' ⚽',
  ' ⚽',
  ' 💸',
  ' 💸',
  ' 😋',
  ' 😋',
  ' 🐱‍🏍',
  ' 🐱‍🏍',
  ' 🐲',
  ' 🐲',
  ' 🐎',
  ' 🐎',
];
let openCards = [];

let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffledEmojis[i];
  box.onclick = handleClick;
  document.querySelector('.game').appendChild(box);
}

function handleClick() {
  sounds('flip-card');
  if (openCards.length < 2) {
    this.classList.add('boxOpen');
    openCards.push(this);
  }
  if (openCards.length === 2) {
    setTimeout(checkMatch, 800);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  }
  if (openCards[0].innerHTML !== openCards[1].innerHTML) {
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }
  openCards = [];

  if (document.querySelectorAll('.boxMatch').length === emojis.length) {
    sounds('you-win');
    setTimeout(() => {
      alert('=) SHOW!!\nVocê Venceu!');
    }, 500);
  }
}

function sounds(sound) {
  let audio = new Audio(`./src/assets/audios/${sound}.mp3`);
  audio.play();
  audio.volume = 0.2;
}
