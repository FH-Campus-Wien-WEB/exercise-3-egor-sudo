/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
   tt1375666: {
      imdbID: "tt1375666", // unique movie id
      Title: "Inception", // movie title
      Released: "2010-07-16", // release date (ISO format)
      Runtime: 148, // runtime in minutes (number)
      Genres: ["Action", "Sci-Fi"], // array of genres
      Directors: ["Christopher Nolan"], // array of directors
      Writers: ["Christopher Nolan"], // array of writers
      Actors: ["Leonardo DiCaprio"], // array of actors
      Plot: "A man enters dreams.", // short description
      Poster: "https://m.media-amazon.com/images/I/91b3Xtjt0IL._AC_SY300_SX300_QL70_ML2_.jpg", // poster URL
      Metascore: 74, // metascore (number)
      imdbRating: 8.8 // rating (number)
   },

   tt0816692: {
      imdbID: "tt0816692",
      Title: "Interstellar",
      Released: "2014-11-07",
      Runtime: 169,
      Genres: ["Drama", "Sci-Fi"],
      Directors: ["Christopher Nolan"],
      Writers: ["Christopher Nolan"],
      Actors: ["Matthew McConaughey"],
      Plot: "Space travel to save humanity.",
      Poster: "https://www.originalfilmart.com/cdn/shop/products/Interstellar_2014_advance_original_film_art_5000x.jpg?v=1600954203",
      Metascore: 74,
      imdbRating: 8.6
   },

   tt0133093: {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Released: "1999-03-31",
      Runtime: 136,
      Genres: ["Action", "Sci-Fi"],
      Directors: ["Wachowski Sisters"],
      Writers: ["Wachowski Sisters"],
      Actors: ["Keanu Reeves"],
      Plot: "A hacker discovers reality is fake.",
      Poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      Metascore: 73,
      imdbRating: 8.7
   },
   tt0111161: {
  imdbID: "tt0111161",
  Title: "The Shawshank Redemption",
  Released: "1994-09-23",
  Runtime: 142,
  Genres: ["Drama"],
  Directors: ["Frank Darabont"],
  Writers: ["Stephen King", "Frank Darabont"],
  Actors: ["Tim Robbins", "Morgan Freeman"],
  Plot: "Two imprisoned men bond over years.",
  Poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
  Metascore: 80,
  imdbRating: 9.3
},

tt0068646: {
  imdbID: "tt0068646",
  Title: "The Godfather",
  Released: "1972-03-24",
  Runtime: 175,
  Genres: ["Crime", "Drama"],
  Directors: ["Francis Ford Coppola"],
  Writers: ["Mario Puzo", "Francis Ford Coppola"],
  Actors: ["Al Pacino", "Marlon Brando"],
  Plot: "Mafia family power struggle.",
  Poster: "https://denovali.com/store/images/large/21539.jpg",
  Metascore: 100,
  imdbRating: 9.2
},

tt0468569: {
  imdbID: "tt0468569",
  Title: "The Dark Knight",
  Released: "2008-07-18",
  Runtime: 152,
  Genres: ["Action", "Crime"],
  Directors: ["Christopher Nolan"],
  Writers: ["Jonathan Nolan", "Christopher Nolan"],
  Actors: ["Christian Bale", "Heath Ledger"],
  Plot: "Batman faces the Joker.",
  Poster: "https://images.wall-art.de/format:webp/q:92/rs:fit:780:/_img/out/pictures/master/product/1/116354.jpg",
  Metascore: 84,
  imdbRating: 9.0
},

tt0109830: {
  imdbID: "tt0109830",
  Title: "Forrest Gump",
  Released: "1994-07-06",
  Runtime: 142,
  Genres: ["Drama", "Romance"],
  Directors: ["Robert Zemeckis"],
  Writers: ["Winston Groom"],
  Actors: ["Tom Hanks"],
  Plot: "Life story of Forrest Gump.",
  Poster: "https://i.ebayimg.com/thumbs/images/g/KLIAAOSw~u9jvsfR/s-l500.jpg",
  Metascore: 82,
  imdbRating: 8.8
},


tt0120737: {
  imdbID: "tt0120737",
  Title: "The Lord of the Rings: The Fellowship of the Ring",
  Released: "2001-12-19",
  Runtime: 178,
  Genres: ["Adventure", "Fantasy"],
  Directors: ["Peter Jackson"],
  Writers: ["J.R.R. Tolkien"],
  Actors: ["Elijah Wood"],
  Plot: "Journey to destroy the ring.",
  Poster: "https://i.ebayimg.com/images/g/-m0AAeSw7~Nn3cxH/s-l960.webp",
  Metascore: 92,
  imdbRating: 8.8
},

tt0137523: {
  imdbID: "tt0137523",
  Title: "Fight Club",
  Released: "1999-10-15",
  Runtime: 139,
  Genres: ["Drama"],
  Directors: ["David Fincher"],
  Writers: ["Chuck Palahniuk"],
  Actors: ["Brad Pitt", "Edward Norton"],
  Plot: "An underground fight club.",
  Poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
  Metascore: 66,
  imdbRating: 8.8
},

tt0110912: {
  imdbID: "tt0110912",
  Title: "Pulp Fiction",
  Released: "1994-10-14",
  Runtime: 154,
  Genres: ["Crime", "Drama"],
  Directors: ["Quentin Tarantino"],
  Writers: ["Quentin Tarantino"],
  Actors: ["John Travolta", "Samuel L. Jackson"],
  Plot: "Stories of crime in LA.",
  Poster: "https://m.media-amazon.com/images/I/71mlgE7nUdL._AC_SY300_SX300_QL70_ML2_.jpg",
  Metascore: 94,
  imdbRating: 8.9
},

tt0167260: {
  imdbID: "tt0167260",
  Title: "The Lord of the Rings: The Return of the King",
  Released: "2003-12-17",
  Runtime: 201,
  Genres: ["Adventure", "Fantasy"],
  Directors: ["Peter Jackson"],
  Writers: ["J.R.R. Tolkien"],
  Actors: ["Elijah Wood"],
  Plot: "Final battle for Middle-earth.",
  Poster: "https://closeup.de/cdn/shop/files/G791712.jpg?v=1743549285&width=1000",
  Metascore: 94,
  imdbRating: 9.0
},

tt0080684: {
  imdbID: "tt0080684",
  Title: "Star Wars: The Empire Strikes Back",
  Released: "1980-05-21",
  Runtime: 124,
  Genres: ["Action", "Adventure"],
  Directors: ["Irvin Kershner"],
  Writers: ["George Lucas"],
  Actors: ["Mark Hamill"],
  Plot: "Empire fights back.",
  Poster: "https://www.myposter.at/cdn-cgi/image/w=1200,f,q=85,fit=cover/https://mp-prod-de-preview-service.s3.eu-central-1.amazonaws.com/resources/collage-designs/263/de-DE/poster_191919_2-3_600.webp?t=1770386321",
  Metascore: 82,
  imdbRating: 8.7
},

tt6751668: {
  imdbID: "tt6751668",
  Title: "Parasite",
  Released: "2019-05-30",
  Runtime: 132,
  Genres: ["Drama", "Thriller"],
  Directors: ["Bong Joon Ho"],
  Writers: ["Bong Joon Ho"],
  Actors: ["Song Kang-ho"],
  Plot: "Class divide story.",
  Poster: "https://cdn.displate.com/artwork/735x1024/2026-01-14/f116816b-97be-49ec-9ab7-9df32b4e1618.jpg",
  Metascore: 96,
  imdbRating: 8.5
}
};

module.exports = movies; // export movies so server.js can use them