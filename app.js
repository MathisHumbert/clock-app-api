// imports
import getQuote from './utils/setQuote.js';
import getTime from './utils/setTime.js';
import { refreshEvent, toggleEvent } from './utils/events.js';

// get elements
const toggleBtn = document.querySelector('.toggle-info');
const refreshBtn = document.querySelector('.quotation-refresh');

// event load
window.addEventListener('DOMContentLoaded', () => {
  getTime('https://worldtimeapi.org/api/ip');
  getQuote(
    'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json'
  );
});

// event refresh quote
refreshBtn.addEventListener('click', refreshEvent);

// event toggle more info
toggleBtn.addEventListener('click', toggleEvent);
