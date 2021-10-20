async function fetchData(URL) {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
}

export default fetchData;
