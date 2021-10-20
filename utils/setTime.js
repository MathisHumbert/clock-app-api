import fetchData from './fetchData.js';

async function getTime(URL) {
  let data = await fetchData(URL);
  displayTime(data);
}

function displayTime(time) {
  // get element
  const hours = document.querySelector('.hour');
  const place = document.querySelector('.place');
  const timezoneEl = document.querySelector('.timezone');
  const year = document.querySelector('.year');
  const week = document.querySelector('.week');
  const numberWeek = document.querySelector('.number-week');

  // destructuring
  let {
    timezone,
    day_of_year,
    day_of_week,
    week_number,
    datetime,
    abbreviation,
  } = time;
  let acutalTime = `${datetime.split('T')[1].split(':')[0]}:${
    datetime.split('T')[1].split(':')[1]
  }`;

  // set element

  place.innerHTML = `in ${timezone.split('/').reverse().join(', ')}`;
  hours.innerHTML = `${acutalTime}<span class="hour-place">${abbreviation}</span>`;
  timezoneEl.innerHTML = timezone;
  year.innerHTML = day_of_year;
  week.innerHTML = day_of_week;
  numberWeek.innerHTML = week_number;
  displayGood(acutalTime);
}

// display text
function displayGood(time) {
  const good = document.querySelector('.good');
  const html = document.querySelector('html');
  const dayLogo = document.querySelector('.day-logo');

  let goodText = 'good ';

  time >= 5 && time < 12
    ? (goodText += 'morning')
    : time >= 12 && time < 18
    ? (goodText += 'afternoon')
    : (goodText += 'night');

  good.textContent = goodText;

  if (goodText.includes('night')) {
    html.classList.add('dark');
    dayLogo.src = '../starter-code/assets/desktop/icon-moon.svg';
  } else {
    html.classList.remove('dark');
    dayLogo.src = '../starter-code/assets/desktop/icon-sun.svg';
  }
}

export default getTime;
