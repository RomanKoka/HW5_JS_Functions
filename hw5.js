// створити функцію конструктор filmMaker яка отримує, назву фільма, рік виходу, рейтинг
// - створити на прототипі filmMaker метод giveInfo яка виводить в консоль інформацію про фільм
// - Розмістіть 5 фільмів створених через конструктор в массив і створіть функцію sortPopular(arr)
//  яка приймає арей і сортує обєкти за популярністью

function FilmMaker(movieTitle, releaseDate, rating){
    this.movieTitle = movieTitle;
    this.releaseDate = releaseDate;
    this.rating = rating;
}
FilmMaker.prototype.giveInfo = function(){
    console.log(`It's ${movieTitle}, ${releaseDate} year of release with rating ${this.rating}`);
}
let movies = [];
let firstMovie = new FilmMaker('Terminator', '1984', '8.0');
movies.push(firstMovie);
let secondMovie = new FilmMaker('Ingulets', '2024', '0.0');
movies.push(secondMovie);
let thirdMovie = new FilmMaker('Titanic', '2002', '10.0');
movies.push(thirdMovie);
let forthMovie = new FilmMaker('Gladiator', '2000', '9.0');
movies.push(forthMovie);
let fifthMovie = new FilmMaker('Genesis', '2022', '7.0');
movies.push(fifthMovie);

console.log(movies);

function sortRating(arr){
    arr.sort((a,b)=>a.rating-b.rating);
}
sortRating(movies);
console.log(movies);

function sortYear(arr){
    arr.sort((a,b) => a.releaseDate - b.releaseDate);
}
sortYear(movies);
console.log(movies);


