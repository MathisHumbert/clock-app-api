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

  // set element

  place.innerHTML = `in ${timezone.split('/').reverse().join(', ')}`;
  hours.innerHTML = `${datetime.split('T')[1].split(':')[0]}:${
    datetime.split('T')[1].split(':')[1]
  }<span class="hour-place">${abbreviation}</span>`;
  timezoneEl.innerHTML = timezone;
  year.innerHTML = day_of_year;
  week.innerHTML = day_of_week;
  numberWeek.innerHTML = week_number;
}

export default getTime;
