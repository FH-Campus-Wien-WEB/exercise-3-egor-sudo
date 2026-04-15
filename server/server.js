const express = require('express'); // import express framework
const path = require('path'); // path utilities
const bodyParser = require('body-parser'); // parse JSON from requests
const movieModel = require('./movie-model.js'); // import movie data

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Serve static files from /files
app.use(express.static(path.join(__dirname, 'files')));

// GET /movies (with optional genre filter)
app.get('/movies', function (req, res) {
  const genre = req.query.genre; // read query param

  const movies = Object.values(movieModel); // object → array

  // return all if no genre
  if (!genre) {
    return res.json(movies);
  }

  // filter by genre
  const filtered = movies.filter(m =>
    (m.Genres || []).includes(genre)
  );

  res.json(filtered);
});

// GET /movies/:imdbID

app.get('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const movie = movieModel[id];

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
});


// PUT /movies/:imdbID

app.put('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const newData = req.body;

  const existing = movieModel[id];

  if (existing) {
    // merge old + new data
    movieModel[id] = {
      ...existing,
      ...newData
    };
    res.sendStatus(200);
  } else {
    movieModel[id] = newData;
    res.status(201).json(newData);
  }
});

// GET /genres
app.get('/genres', function (req, res) {
  const movies = Object.values(movieModel);
  const set = new Set();

  // collect unique genres
  movies.forEach(m => {
    (m.Genres || []).forEach(g => set.add(g));
  });

  const genres = Array.from(set).sort();

  res.json(genres);
});

app.listen(3000);
console.log("Server now listening on http://localhost:3000/");