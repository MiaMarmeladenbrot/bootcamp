// 1. Alle kacheln/Filme beim laden der Seite anzeigen
//      a. benötigte daten rauspicken map / forEach
//      b. in genre nochmal mappen
// 2. Sortierfunktion erstellen
//      a. Eventlistener für alle 3 sorterungen hinzufügen ink. Parameterübergabe
//      b. bedingung (if else) schrieben welche sort funkion benötigt wird
//      c. sortiefunktion schreiben und in ein neus Array packen
// 3. Update funktion schrieben
//      a. Funktion schrieben die die aktuellen Filme sortiert ausgibt
//      b. Parameter übergeben und daten laden lassen
// 4. Suchfunktion schreiben
//      a. Suchfunktion schrieben und value von inputfeld auslesen
//      b. Filter methode anwenden und suchen nach den filmen  mit dem suchwort
//      c. ich bekomme ein array zurück mit gefilterten daten
//      d. Checken ob ein film gefunden worden ist mit dem suchwort
//      e. Daten werden an update fnktion weitergegeben
// 5. Add Funktion
//      a. EventLisener zum Add btn hinzufügen
//      b. event.prefendDefault machen
//      c. Values Auslesen
//      d. ein neue Array erstellen mit allen daten
//      e. Neues Array zum bestehenden packen
//      f. Ausgeben lassen




// C R U D
// C = Create
// R = Read
// U = Update
// D = Deleat 

const movies = [
  [
    "The Shawshank Redemption",
    "1994",
    "Frank Darabont",
    "2h 22min",
    ["Crime", "Drama"],
    "9.3",
  ],
  [
    "The Godfather",
    "1972",
    "Francis Ford Coppola",
    "2h 55min",
    ["Crime", "Drama"],
    "9.2",
  ],
  [
    "The Godfather: Part II",
    "1974",
    "Francis Ford Coppola",
    "3h 22min",
    ["Crime", "Drama"],
    "9.0",
  ],
  [
    "The Dark Knight",
    "2008",
    "Christopher Nolan",
    "2h 32min",
    ["Action", "Crime", "Drama", "Thriller"],
    "9.0",
  ],
  [
    "12 Angry Men",
    "1957",
    "Sidney Lumet",
    "1h 36min",
    ["Crime", "Drama"],
    "8.9",
  ],
  [
    "Schindler's List",
    "1993",
    "Steven Spielberg",
    "3h 15min",
    ["Biography", "Drama", "History"],
    "8.9",
  ],
  [
    "Pulp Fiction",
    "1994",
    "Quentin Tarantino",
    "2h 34min",
    ["Crime", "Drama"],
    "8.9",
  ],
  [
    "The Lord of the Rings: The Return of the King",
    "2003",
    "Peter Jackson",
    "3h 21min",
    ["Adventure", "Drama", "Fantasy"],
    "8.9",
  ],
  [
    "Il buono, il brutto, il cattivo",
    "1966",
    "Sergio Leone",
    "3h 2min",
    ["Western"],
    "8.9",
  ],
  ["Fight Club", "1999", "David Fincher", "2h 19min", ["Drama"], "8.8"],
  [
    "The Lord of the Rings: The Fellowship of the Ring",
    "2001",
    "Peter Jackson",
    "2h 58min",
    ["Adventure", "Drama", "Fantasy"],
    "8.8",
  ],
  [
    "Forrest Gump",
    "1994",
    "Robert Zemeckis",
    "2h 22min",
    ["Comedy", "Drama", "Romance"],
    "8.8",
  ],
  [
    "Star Wars: Episode V - The Empire Strikes Back",
    "1980",
    "Irvin Kershner",
    "2h 4min",
    ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    "8.8",
  ],
  [
    "Inception",
    "2010",
    "Christopher Nolan",
    "2h 28min",
    ["Action", "Adventure", "Sci-Fi", "Thriller"],
    "8.8",
  ],
  [
    "The Lord of the Rings: The Two Towers",
    "2002",
    "Peter Jackson",
    "2h 59min",
    ["Adventure", "Drama", "Fantasy"],
    "8.7",
  ],
  [
    "One Flew Over the Cuckoo's Nest",
    "1975",
    "Milos Forman",
    "2h 13min",
    ["Drama"],
    "8.7",
  ],
  [
    "Goodfellas",
    "1990",
    "Martin Scorsese",
    "2h 26min",
    ["Crime", "Drama"],
    "8.7",
  ],
  [
    "The Matrix",
    "1999",
    "Lana Wachowski",
    "2h 16min",
    ["Action", "Sci-Fi"],
    "8.7",
  ],
  [
    "Shichinin no samurai",
    "1954",
    "Akira Kurosawa",
    "3h 27min",
    ["Adventure", "Drama"],
    "8.7",
  ],
  [
    "Star Wars",
    "1977",
    "George Lucas",
    "2h 1min",
    ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    "8.7",
  ],
  [
    "Cidade de Deus",
    "2002",
    "Fernando Meirelles",
    "2h 10min",
    ["Crime", "Drama"],
    "8.7",
  ],
  [
    "Se7en",
    "1995",
    "David Fincher",
    "2h 7min",
    ["Crime", "Drama", "Mystery", "Thriller"],
    "8.6",
  ],
  [
    "The Silence of the Lambs",
    "1991",
    "Jonathan Demme",
    "1h 58min",
    ["Crime", "Drama", "Thriller"],
    "8.6",
  ],
  [
    "It's a Wonderful Life",
    "1946",
    "Frank Capra",
    "2h 10min",
    ["Drama", "Family", "Fantasy"],
    "8.6",
  ],
  [
    "La vita è bella",
    "1997",
    "Roberto Benigni",
    "1h 56min",
    ["Comedy", "Drama", "War"],
    "8.6",
  ],
  [
    "The Usual Suspects",
    "1995",
    "Bryan Singer",
    "1h 46min",
    ["Crime", "Drama", "Mystery", "Thriller"],
    "8.6",
  ],
  [
    "Léon",
    "1988",
    "Luc Besson",
    "1h 50min",
    ["Crime", "Drama", "Thriller"],
    "8.6",
  ],
  [
    "Saving Private Ryan",
    "1998",
    "Steven Spielberg",
    "2h 49min",
    ["Drama", "War"],
    "8.6",
  ],
  [
    "Sen to Chihiro no kamikakushi",
    "2001",
    "Hayao Miyazaki",
    "2h 5min",
    ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
    "8.6",
  ],
  [
    "American History X",
    "1998",
    "Tony Kaye",
    "1h 59min",
    ["Crime", "Drama"],
    "8.5",
  ],
  [
    "C'era una volta il West",
    "1968",
    "Sergio Leone",
    "2h 44min",
    ["Western"],
    "8.6",
  ],
  [
    "Interstellar",
    "2014",
    "Christopher Nolan",
    "2h 49min",
    ["Adventure", "Drama", "Sci-Fi"],
    "8.6",
  ],
  [
    "Psycho",
    "1960",
    "Alfred Hitchcock",
    "1h 49min",
    ["Horror", "Mystery", "Thriller"],
    "8.5",
  ],
  [
    "The Green Mile",
    "1999",
    "Frank Darabont",
    "3h 9min",
    ["Crime", "Drama", "Fantasy", "Mystery"],
    "8.5",
  ],
  [
    "Casablanca",
    "1942",
    "Michael Curtiz",
    "1h 42min",
    ["Drama", "Romance", "War"],
    "8.5",
  ],
];

const movieBox = document.querySelector(".movie-list");

// ! Erstellt eine Liste direkt beim Laden der seite

// console.log(movies);

movies.forEach((item) => {
  movieBox.innerHTML += `
      <div>
      <h5>${item[0]}</h5>
      <p>${item[1]}</p>
      <p>${item[2]}</p>
      <p>${item[3]}</p>
      <ul>
        ${item[4].map((genreItem) => `<li>${genreItem}</li>`).join("")}
      </ul>
      <p>${item[5]}</p>
      </div>
      `;
});

// ! Year & Rate Sort Funktion

// * EventLisener mit Paramet übergeben
const yearUp = document.querySelector(".yearUp");
const yearDown = document.querySelector(".yearDown");
const rate = document.querySelector(".rate");

yearUp.addEventListener("click", () => {
  sort("up");
});
yearDown.addEventListener("click", () => {
  sort("down");
});
rate.addEventListener("click", () => {
  sort("rate");
});

// * Sort Funktion
const sort = (sort) => {
  // Checken was angeklickt worden ist
  //   console.log(sort);

  let sortetMovies = [];

  if (sort === "up") {
    // [1] = weil Year sich bei index 1 befindet
    sortetMovies = movies.sort((a, b) => a[1] - b[1]);
  } else if (sort === "down") {
    // [1] = weil Year sich bei index 1 befindet
    sortetMovies = movies.sort((a, b) => b[1] - a[1]);
  } else if (sort === "rate") {
    // [5] = weil Rate sich bei index 5 befindet
    sortetMovies = movies.sort((a, b) => b[5] - a[5]);
  }

  //   console.table(sortetMovies);

  updateFunc(sortetMovies);
};

// ! Update Funktion der Movie liste

const updateFunc = (movie) => {
  // Bevor die neue Liste ausgegeben wir, löschen wir den inhalt
  movieBox.innerHTML = "";

  //   Nun schreiben wir den neuen inhalt in das HTML
  movie.forEach((item) => {
    movieBox.innerHTML += `
            <div>
            <h5>${item[0]}</h5>
            <p>${item[1]}</p>
            <p>${item[2]}</p>
            <p>${item[3]}</p>

            ${
              item[4] == null
                ? "<p> Kein Genre </p>"
                : `<ul>
                 ${item[4].map((genreItem) => `<li>${genreItem}</li>`).join("")}
                 </ul>
            `
            }
            
            <p>${item[5]}</p>
            </div>
            `;
  });
};

// ! Seach Funktion

const searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
  // Holt sich das Value
  const inputVal = document.querySelector(".input").value;

  // Filterfunktion ohne groß und klein schriebung. Alles wird in klein verglichen
  const searchedMovies = movies.filter((item) => {
    return item[0].toLowerCase().includes(inputVal.toLowerCase());
  });

  console.log(searchedMovies);

  searchedMovies.length <= 0
    ? (movieBox.innerHTML = "<p> Kein film gefunden </p>")
    : updateFunc(searchedMovies);
});

// ! Add Movie Funktion
const submitBtn = document.querySelector(".submitbtn");

submitBtn.addEventListener("click", (event) => {
  // verhindert das neuladen der seite
  event.preventDefault();

  //   Holt uns das value
  let name = document.querySelector(".title").value;
  let year = document.querySelector(".year").value;
  let regisseur = document.querySelector(".regi").value;
  let time = document.querySelector(".time").value;
  let genre = document.querySelector(".genre").value;
  let rateMovie = document.querySelector(".rate-movie").value;

  //   Erstellt ein neues array mit den gezogenen daten aus den inputs
  const newMovie = [
    name.length <= 0 ? "Keine Titel vorhanden" : name,
    year.length <= 0 ? "Keine Jahr vorhanden" : year,
    regisseur.length <= 0 ? "Keine Regisseur eingetragen" : regisseur,
    time.length <= 0 ? "Keine Zeit eingetragen" : time,
    genre === "" ? null : genre.split(" "),
    rateMovie.length <= 0 ? "Keine Rating eingetragen" : rateMovie,
  ];

  console.log(newMovie);

  movies.push(newMovie);

  updateFunc(movies);
});

//   [
//     "The Shawshank Redemption",
//     "1994",
//     "Frank Darabont",
//     "2h 22min",
//     ["Crime", "Drama"],
//     "9.3",
//   ],

console.log(movies);
