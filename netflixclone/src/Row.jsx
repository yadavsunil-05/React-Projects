import axios from "./axios";
import { useEffect, useState } from "react";
import loader from "./assets/loader.gif"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await axios.get(fetchUrl)
      console.log(res.data.results);
      setMovies(res.data.results);
    }
    getData()
  }, [fetchUrl])


  return (
    <div className="row">
      {
        movies.length === 0 ? <img src={loader} /> :
          <>
            <h2 className="row-title">{title}</h2>
            <span className="row-line"> </span >
            <div className="row_posters">
              {
                movies.map(movie => (
                  <div key={movie.id} className="card-container">
                    <img src={`${base_url}${movie.poster_path}`} alt="poster" className="poster-img" />
                    <div className="info">
                      <p className="movie-title">{movie.original_title || movie.original_name}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default Row