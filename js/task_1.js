"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Ваш последний фильм?', ''),
    reatingLastFilm = +prompt('Насколько баллов оцените его?', ''),
    c = prompt('Ваш последний фильм?', ''),
    d = +prompt('Насколько баллов оцените его?', '');

personaMovieDB.movies[`'${lastFilm}'`] = reatingLastFilm;
personaMovieDB.movies[`'${c}'`] = d;

console.log(personaMovieDB.movies);
console.log(personaMovieDB);