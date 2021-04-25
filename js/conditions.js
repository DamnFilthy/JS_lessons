"use strict";


let numberOfFilms;

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms < 0 || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    return numberOfFilms;
}
numberOfFilms = start();


function rememberMyFilms() {
    for (let i = 0; i < 3; i++) {
        let lastFilm = prompt('Ваш последний фильм?', ''),
            reatingLastFilm = +prompt('Насколько баллов оцените его?', '');
        if (lastFilm == null || lastFilm == '' || lastFilm.length >= 50) {
            console.log('Error!');
            --i;
        } else if (reatingLastFilm == null || reatingLastFilm == '' || reatingLastFilm > 10) {
            console.log('Error!');
            --i;
        } else {
            console.log('Done');
            personaMovieDB.movies[`'${lastFilm}'`] = reatingLastFilm;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (numberOfFilms == null || numberOfFilms == '' || numberOfFilms < 0) {
        console.log('Ошибка -  неправильное значение.');
    } else if (numberOfFilms < 10) {
        console.log('Просмотрено мало фильмов.');
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log('Вы классический зритель.');
    } else if (numberOfFilms > 50) {
        console.log('Вы киноман');
    } else if (numberOfFilms == null || numberOfFilms == '' || numberOfFilms < 0) {
        console.log('Ошибка -  неправильное значение.');
    }
}
detectPersonalLevel();

function writeYourGenres(){
    for (let i = 0; i < 3; i++) {
        let genre = prompt(`Ваш любимый жанр №${i+1}?`, '');
            
        if (genre == null || genre== '') {
            console.log('Error!');
            --i;
        } else {
            console.log('Done');
            personaMovieDB.genres[i] = genre;
        }
    }
}
writeYourGenres();

function showMyDB(arr) {
    if (arr.privat == false) {
        console.log(arr.movies);
    } else {
        console.log('Данные засекречены');
    }
}
showMyDB(personaMovieDB);
console.log(personaMovieDB.genres);
// console.log(personaMovieDB.movies);
// console.log(personaMovieDB);