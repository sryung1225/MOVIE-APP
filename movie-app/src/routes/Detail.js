import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
        )
      ).json();
      console.log(json);
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [movieId]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <dl>
            <dt>YEAR</dt>
            <dd>{movie.year}</dd>
            <dt>RUNNING TIME</dt>
            <dd>{movie.runtime}</dd>
          </dl>
          <ul>
            {movie.genres.map((v, idx) => (
              <li key={idx}>{v}</li>
            ))}
          </ul>
          <p>{movie.description_full}</p>
          <img src={movie.background_image} alt={`<${movie.title}> poster`} />
        </div>
      )}
    </div>
  );
}

export default Detail;
