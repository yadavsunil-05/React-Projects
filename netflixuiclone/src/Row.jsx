import axios from "./axios";
import { useEffect, useState } from "react";
import loader from "./assets/loader.gif"
import ImgLoader from "./assets/img.gif"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const base_url = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await axios.get(fetchUrl)
      setMovies(res.data.results);
      return res
    }
    getData()
  }, [fetchUrl])


  if (!movies) {
    return (
      <img src={loader} className="loader" />
    )
  }

  return (
    <div className="row">
      {
        <>
          <h2 className="row-title">{title}</h2>
          <span className="row-line"> </span >
          <div className="row_posters">
            {
              movies.map(movie => (
                <div key={movie.id} className="card-container">
                  <LazyLoadImage effect="blur"
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="poster" className={`${isLargeRow ? "posterLarge" : "poster-img"}`}
                    placeholderSrc={process.env.PUBLIC_URL + ImgLoader}
                  />
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