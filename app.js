const toggleBtn = document.querySelector('.toggle-info');
const hero = document.querySelector('.hero');
const quotationContainer = document.querySelector('.quotation');
const info = document.querySelector('.info');

toggleBtn.addEventListener('click', () => {
  if (hero.classList.contains('open')) {
    hero.classList.remove('open');
    setTimeout(() => {
      quotationContainer.style.display = 'block';
      info.style.paddingTop = 0;
    }, 600);
  } else {
    hero.classList.add('open');
    quotationContainer.style.display = 'none';
    info.style.paddingTop = '4rem';
  }
});

async function fetchTime(URL) {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
}

async function getTime(URL1) {
  let time = await fetchTime(URL1);
  displayTime(time);
}

getTime('https://worldtimeapi.org/api/ip');

getData(
  'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json'
);

function displayTime(time) {
  const hours = document.querySelector('.hour');
  const hourPlace = document.querySelector('.hour-place');
  const place = document.querySelector('.place');
  const timezoneEl = document.querySelector('.timezone');
  const year = document.querySelector('.year');
  const week = document.querySelector('.week');
  const numberWeek = document.querySelector('.number-week');

  let {
    timezone,
    day_of_year,
    day_of_week,
    week_number,
    datetime,
    abbreviation,
  } = time;

  hourPlace.textContent = abbreviation;
  place.innerHTML = `in ${timezone.split('/').reverse().join(', ')}`;
  hours.textContent = `${datetime.split('T')[1].split(':')[0]}:${
    datetime.split('T')[1].split(':')[1]
  }`;
  timezoneEl.innerHTML = timezone;
  year.innerHTML = day_of_year;
  week.innerHTML = day_of_week;
  numberWeek.innerHTML = week_number;
}
