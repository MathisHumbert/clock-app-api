import getQuote from './setQuote.js';

const hero = document.querySelector('.hero');
const quotationContainer = document.querySelector('.quotation');
const moreInfo = document.querySelector('.more-info');
const info = document.querySelector('.info');
const arrowImg = document.querySelector('.arrow');

function refreshEvent() {
  quotationContainer.classList.add('animate');
  setTimeout(
    () =>
      getQuote(
        'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json'
      ),
    250
  );

  setTimeout(() => quotationContainer.classList.remove('animate'), 1000);
}

function toggleEvent() {
  if (hero.classList.contains('open')) {
    hero.classList.remove('open');
    toggleDisplay();
    arrowImg.style.transform = 'rotate(180deg)';
    setTimeout(() => quotationContainer.classList.remove('animate-more'), 1000);
  } else {
    hero.classList.add('open');
    toggleDisplay();
    arrowImg.style.transform = 'rotate(0deg)';
  }
}

function toggleDisplay() {
  info.classList.add('animate-more');
  moreInfo.classList.add('animate-more');
  quotationContainer.classList.add('animate-more');

  setTimeout(() => {
    info.classList.remove('animate-more');
    moreInfo.classList.remove('animate-more');
  }, 1000);
}

export { refreshEvent, toggleEvent };
