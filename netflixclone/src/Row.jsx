import axios from "./axios";
import { useEffect, useState } from "react";

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
      <h2 className="row-title">{title}</h2>
      <div className="row_posters">
        {
          movies.map(movie => (
            <img src={`${base_url}${movie.poster_path}`} alt="" className="poster-img" key={movie.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Row