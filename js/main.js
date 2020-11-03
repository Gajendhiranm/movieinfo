


document.addEventListener('DOMContentLoaded', function onReady(){


  document.getElementById('search-form').addEventListener('submit', function onSearchSubmit(e){

          e.preventDefault();
          const title = document.getElementById("search-text").value ;
            const API = "http://www.omdbapi.com/?apikey=e54db17c";
            async function getData(){
              let response = await fetch(API+`&s=${title}`);
              let data = await response.json();
              return data;
            }
        getData().then((data) =>{
          loadMovies(data.Search)
        });
       
          });

});


function loadMovies(movies){

  var output = ''

  movies.forEach((movie) => {
      output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
        </div>
      </div>
    `
  })
  
  document.getElementById('movies').innerHTML = output;
}
function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}
