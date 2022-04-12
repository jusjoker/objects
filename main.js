const favoriteMovies = [
    {
        name: "Indiana Jones and the Temple of Doom",
        year: 1984,
        director: "Steven Spielberg",
        picture: "https://m.media-amazon.com/images/I/51ETiIJ-K5L.jpg"
    },
    {
        name: "The Batman",
        year: 2022,
        director: "Matt Reeves",
        picture: "https://cdn.europosters.eu/image/1300/posters/the-batman-2022-i122127.jpg"
    },
    {
        name: "Star Wars: Return of the Jedi",
        year: 1983,
        director: "George Lucas",
        picture: "https://m.media-amazon.com/images/I/81E911hVDAL._AC_SL1500_.jpg"
    }
]

const favoriteMoviesEl = document.querySelector('ol');
let template = ''
for (let i = 0; i < favoriteMovies.length; i++) {
  const item = `
    <li>
        <p>Name: ${favoriteMovies[i].name}</p>
        <p>Year: ${favoriteMovies[i].year}</p>
        <p>Director: ${favoriteMovies[i].director}</p>
        <img src="${favoriteMovies[i].picture}"
    </li>
  `
  template += item;
}
favoriteMoviesEl.innerHTML = template;