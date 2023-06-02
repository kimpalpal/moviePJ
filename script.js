const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjc2ZTE1MWI3MWJhYjk1NGQ2OWM2MDQ1MWE1MzIxYyIsInN1YiI6IjY0NzU3MWI2OTYzODY0MDBhOGU2ODE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6fI0OtKozW_J_k5JOaTzCMelDps5m1LKL1ck5tyzgXQ'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response) => {
    document.querySelector('.movie').remove();
    response.results.forEach((movie) => {
      let template = `<div class="movie" onclick="alert(${movie.id})">
                      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" />
                      <h2 class="movieName">${movie.title}</h2>
                      <p class="overview">${movie.overview}</p>
                      <p class="movieRate">평점 ${movie.vote_average}</p>                      
                    </div>`;
                    
  document.querySelector('#card-wrap')
      .insertAdjacentHTML('beforeend', template);
    });

  })


  .catch((err) => console.error(err));

















/*const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjc2ZTE1MWI3MWJhYjk1NGQ2OWM2MDQ1MWE1MzIxYyIsInN1YiI6IjY0NzU3MWI2OTYzODY0MDBhOGU2ODE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6fI0OtKozW_J_k5JOaTzCMelDps5m1LKL1ck5tyzgXQ'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then((response) => {
    console.log(response);
    let arr = response.results;

    arr.forEach((x) => {
      let title = x["title"];
      let overview = x["overview"];
      let poster_path = x["poster_path"];
      let vote_average = x["vote_average"];
      let id = x["id"];
      console.log(title, overview, vote_average);

      let temp_html = `<div class="card">
                        <img src="" alt=""/>
                        <p id="title"> ${poster_path} </p>
                        <p id="scroe"> ${title} </p>
                        <p id="expl"> ${overview} </p>
                      </div>`;

      cardWrapper.append(temp_html);
    });
    });

  .catch((err) => console.log(err)); 

  /* 검색하기 
  
  function getMovies() {
    let movieSearch =document.getElementById("movieSearch").value;
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then((data) => {
      document.getElementById("가저와야 하는 값").innerHTML = data['']
    })
  }
  */
