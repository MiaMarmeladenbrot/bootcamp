const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
];
const table = document.querySelector(".table");
const inputName = document.querySelector(".inputName");
const error = document.querySelector(".error");

const writeInHTML = (objects) => {
  if (objects.length <= 0) {
    console.log("no data");
    error.innerHTML = `  <h4 class="error">Artist not found</h4>`;
  } else {
    table.innerHTML = `<div><h3>Name</h3></div>
      <div><h3>Country</h3></div>
      <div><h3>Period Active</h3></div>
      <div><h3>Genre</h3></div>`;
    objects.forEach((singer) => {
      table.innerHTML += `
        <div><p>${singer.name}</p></div>
        <div><p>${singer.country}</p></div>
        <div><p>${singer.period_active.start} - ${singer.period_active.end}</p></div>
        <div><p>${singer.genre}</p></div>
         `;
    });
  }
};

writeInHTML(singers);

const search = () => {
  const filteredItem = singers.filter((item) => {
    return item.name.toLowerCase().includes(inputName.value.toLowerCase());
  });
  // table.innerHTML = " ";

  writeInHTML(filteredItem);
};

// if (item.name.toLowerCase().includes(inputName.value.toLowerCase())) {
//   return item;
// } else {
//   error.innerHTML = "Artist not found";
//   console.log("not found");
// }
