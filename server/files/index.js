document.addEventListener("DOMContentLoaded", function () {

  const nav = document.getElementById("nav");
  const main = document.getElementById("main");

  //  load genres 
  const xhrGenres = new XMLHttpRequest();

  xhrGenres.onload = function () {
    const genres = JSON.parse(xhrGenres.responseText);

    createButton("All", null);

    genres.forEach(g => createButton(g, g));

    nav.querySelector("button").click();
  };

  xhrGenres.open("GET", "/genres");
  xhrGenres.send();

  function createButton(text, genre) {
    const btn = document.createElement("button");
    btn.textContent = text;

    btn.onclick = function () {
      loadMovies(genre);
    };

    nav.appendChild(btn);
  }

  //  load movies 
  function loadMovies(genre) {

    main.innerHTML = "";

    const xhr = new XMLHttpRequest();

    let url = "/movies";

    if (genre) {
      const params = new URLSearchParams();
      params.set("genre", genre);
      url += "?" + params.toString();
    }

    xhr.onload = function () {
      const movies = JSON.parse(xhr.responseText);
      movies.forEach(movie => appendMovie(movie));
    };

    xhr.open("GET", url);
    xhr.send();
  }

  //render movie 
  function appendMovie(movie) {

    const article = document.createElement("article");

    const title = document.createElement("h2");
    title.textContent = movie.Title;

    const img = document.createElement("img");
    img.src = movie.Poster;

    const plot = document.createElement("p");
    plot.textContent = movie.Plot;

    const info = document.createElement("p");
    info.textContent =
      "Released: " + movie.Released +
      " | Runtime: " + movie.Runtime +
      " | Rating: " + movie.imdbRating;

    const genresDiv = document.createElement("div");
    movie.Genres.forEach(g => {
      const span = document.createElement("span");
      span.textContent = g;
      span.className = "genre";
      genresDiv.appendChild(span);
    });

    const extra = document.createElement("p");
    extra.textContent =
      "Directors: " + movie.Directors.join(", ") + " | " +
      "Writers: " + movie.Writers.join(", ") + " | " +
      "Actors: " + movie.Actors.join(", ") + " | " +
      "Metascore: " + movie.Metascore;

    const button = document.createElement("button");
    button.textContent = "Edit";

    button.onclick = function () {
      location.href = "edit.html?imdbID=" + movie.imdbID;
    };

    article.appendChild(title);
    article.appendChild(img);
    article.appendChild(plot);
    article.appendChild(info);
    article.appendChild(genresDiv);
    article.appendChild(extra);
    article.appendChild(button);

    main.appendChild(article);
  }

});