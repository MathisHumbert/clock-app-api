// imports
import getQuote from './utils/setQuote.js';
import getTime from './utils/setTime.js';

// get element
const toggleBtn = document.querySelector('.toggle-info');
const hero = document.querySelector('.hero');
const quotationContainer = document.querySelector('.quotation');
const info = document.querySelector('.more-info');
const refreshBtn = document.querySelector('.quotation-refresh');

// events
window.addEventListener('DOMContentLoaded', () => {
  getTime('https://worldtimeapi.org/api/ip');
  getQuote(
    'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json'
  );
});

refreshBtn.addEventListener('click', () => {
  quotationContainer.classList.add('animate');
  setTimeout(
    () =>
      getQuote(
        'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json'
      ),
    250
  );

  setTimeout(() => quotationContainer.classList.remove('animate'), 1000);
});

toggleBtn.addEventListener('click', () => {
  console.log('hello');
  hero.classList.toggle('open');
  info.classList.add('animate');
});

// toggleBtn.addEventListener('click', () => {
//   if (hero.classList.contains('open')) {
//     hero.classList.remove('open');
//     setTimeout(() => {
//       quotationContainer.style.display = 'block';
//       info.style.paddingTop = 0;
//     }, 600);
//   } else {
//     hero.classList.add('open');
//     quotationContainer.style.display = 'none';
//     info.style.paddingTop = '4rem';
//   }
// });
