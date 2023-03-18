let api_key = "04a03760452fdabea07d13c24071c6e3";

console.log("hello");
let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  // console.log('clicked')
  let bottomHeader = document.querySelector(".bottomHeader");
  bottomHeader.classList.toggle("show");
  let i = document.querySelector("i");
  i.classList.toggle("fa-xmark");
});

let i = 1;
let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${i}`;

fetchData();
let showMore = document.querySelector('#showMore');

showMore.addEventListener('click', nextData)


   function nextData(){

    console.log('clicked')
    
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${i+1}`;
    
    fetchData();
    console.log(i)
}




function fetchData() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        i++;
        const message = `A error occured ${response.status}`;
        throw new Error(message);
        console.log(Error(message));
      }
      return response.json();
    })
    .then((movies) => {
      console.log(movies);
      let container = document.querySelector(".container");
      let movieLen = movies.results.length;

      showMovies();
      function showMovies() {
        for (var j = 0; j < movieLen; j++) {
          let movie = movies.results[j];
          container.innerHTML += `  <div class="box">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Poster">
                <div class="moviesDetails">
                  <div class="leftDetails">
                    <h5>${movie.original_title}</h5>
                    <p>${movie.release_date}</p>
                  </div>
                  <div class="rightDetails">
                    <p>${movie.vote_average}%</p>
                  </div>
                </div>
              </div>`;
        }
      }
    })
    .catch((error) => {
      error.message;
      console.log(message);
    });
}
