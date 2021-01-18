// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {

const directors = moviesArr.map(function (name) {
    return name.director;
})
return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    
    const spielbergDramas = moviesArr.filter(function (name){
        if (name.director === "Steven Spielberg" && name.genre.indexOf("Drama") !== -1) {
          return true;
        }
    }).length

  return spielbergDramas;  
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (moviesArr){

    if (moviesArr.length === 0) {
        return 0;
    }
    const numOfMovies = moviesArr.length;
   
    const ratesCleaned = moviesArr.filter(function (element) {
      if (typeof element.rate  === "number") {
        return true;
      }
    })  
    const sumRates = ratesCleaned.reduce(function(total, movie) {
      return total + movie.rate;
    }, 0) 
    
    return Number((sumRates/numOfMovies).toFixed(2));     
   }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (moviesArr) {

    const dramaMovies = moviesArr.filter(function (element) {
      if (element.genre.indexOf("Drama") !== -1) {
        return true;
      }
    })

    if (dramaMovies.length === 0) {
        return 0;
    }

    const numOfMovies = dramaMovies.length;
  
    dramaRatesCleaned = dramaMovies.filter(function (element) {
      if (typeof element.rate  === "number") {
     return true;
   }
    })
   const sumRates = dramaRatesCleaned.reduce(function(total, movie) {
   return total + movie.rate;
 }, 0) 
 
 return Number((sumRates/numOfMovies).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) and title, alphabetical (ascending) order

function orderByYear(moviesArr) {
    //make real copy not only reference of the sorted array:
    const movies = moviesArr.slice();

    const sortedByTitleAndRelease = movies.sort(function(a, b) {
       if(a.title < b.title) {return -1;}
       if(a.title > b.title) {return 1;}
       return 0;
     }).sort(function(a, b) {
      return a.year - b.year;
     })
    
    return sortedByTitleAndRelease;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {

    //make real copy not only reference of the sorted array:
    const movies = moviesArr.slice();

    const sorted = movies.sort(function(a,b) {
     if(a.title < b.title) {return -1;}
     if(a.title > b.title) {return 1;}
     return 0;
   }).slice(0,20).map(function (titles) {
  return titles.title;
})

return sorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr) {

    const movie = JSON.parse(JSON.stringify(moviesArr));
    
    const hour2Minute = movie.map(function (movie){      
        
        let str = movie.duration;

        if(str.indexOf("h") !== -1 && str.indexOf("min") === -1) {
          const hour = str.split("h")[0];
          movie.duration = hour*60;
          return movie;
      } 
        else if(str.indexOf("min") !== -1 && str.indexOf("h") === -1) {
          const minutes = str.split("min")[0];
          movie.duration = minutes*1;
          return movie;
      } 
      
        else if (str.indexOf("min") !== -1 && str.indexOf("h") !== -1) {
          const splitTimes = str.split(" ")
          const hour = splitTimes[0].split("h")[0];
          const minutes = splitTimes[1].split("min")[0];
          movie.duration = hour*60+minutes*1;
          return movie;
      }
    })

    return hour2Minute;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


// matrix mit Jahr * filme je Jahr
// Jahr: array of distinct years => length
//for schleife, dann filter nach jahr & averages je jahr. index der rates wie dinstinctYears


function bestYearAvg(moviesArr) {

if(moviesArr.length === 0) {return null;}

if(moviesArr.length === 1) {return moviesArr.rate;}

const years = moviesArr.map(function(movie) {
    return movie.year;
  })

const distinctYears = years.filter(function (value, index, arr) {
    return arr.indexOf(value) === index;
  })

let matrix = [];

for (let i = 0; i<distinctYears.length; i++) {

let filterYear = moviesArr.filter(function (movie){
    if (movie.year === distinctYears[i]) {
      return true;
    }
})

const numMoviesOfYear = filterYear.length;

const sumOfRatesinYear = filterYear.reduce(function (total, movie) {
return total + movie.rate;
},0)

const averageRateInYear = sumOfRatesinYear/numMoviesOfYear;

matrix.push(averageRateInYear);
}



const indexMaxRate = matrix.indexOf(Math.max(...matrix)); //still need to add all max avg-rates if more than one year
                              
return Math.max(distinctYears[indexMaxRate]);

}



