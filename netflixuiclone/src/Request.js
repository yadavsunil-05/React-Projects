const API_KEY = "bce98d587d40f89541d3b47a133a30a5"

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
};

export default requests

// fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`