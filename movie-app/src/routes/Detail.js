import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
        )
      ).json();
      console.log(json);
    };
    getMovie();
  }, [movieId]);
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
