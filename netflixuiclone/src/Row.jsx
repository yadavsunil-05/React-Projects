import axios from "./axios";
import { useEffect, useState } from "react";
import loader from "./assets/loader.gif";
import ImgLoader from "./assets/img.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }
    getData();
  }, [fetchUrl]);

  //From Documentation of react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {},
    autoplay: 1,
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); //If video is already open
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  if (!movies) {
    return <img src={loader} className="loader" />;
  }

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <span className="row-line"> </span>

      <div className="row_posters">
        {movies.map((movie) => (
          <div key={movie.id} className="card-container">
            <LazyLoadImage
              effect="blur"
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt="poster"
              className={`${isLargeRow ? "posterLarge" : "poster-img"}`}
              placeholderSrc={process.env.PUBLIC_URL + ImgLoader}
              onClick={() => handleClick(movie)}
            />
            <div className="info">
              <p className="movie-title">
                {movie.original_title || movie.original_name}
              </p>
            </div>
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
