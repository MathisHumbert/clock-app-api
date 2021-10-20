import fetchData from './fetchData.js';

async function getQuote(URL) {
  let data = await fetchData(URL);
  let randomNumber = Math.floor(Math.random() * data.length);
  displayQuote(data[randomNumber]);
}

function displayQuote(quote) {
  // get element
  const text = document.querySelector('.quotation-text');
  const aut = document.querySelector('.quotation-author');

  // destructuring
  let { author, en } = quote;

  // set element
  text.innerHTML = en;
  aut.innerHTML = author;
}

export default getQuote;
