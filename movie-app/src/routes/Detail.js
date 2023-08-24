import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading.js";
import { styled } from "styled-components";

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
        <Loading />
      ) : (
        <Wrapper>
          <div class="gallery">
            <MoviePoster
              src={movie.medium_cover_image}
              alt={`<${movie.title}> poster`}
            />
            <MovieShot
              src={movie.background_image}
              alt={`<${movie.title}> stillshot`}
            />
          </div>
          <MovieInfo>
            <MovieTitle>
              <span class="first-letter">{movie.title.slice(0, 1)}</span>
              <span class="letters">{movie.title.slice(1)}</span>
            </MovieTitle>
            <InfoList>
              <dt>YEAR</dt>
              <dd>{movie.year}</dd>
              <dt>RUNTIME</dt>
              <dd>{movie.runtime}</dd>
              <dt>RATING</dt>
              <dd>{movie.rating}</dd>
            </InfoList>
            <MovieGenres>
              <h3>GENRES</h3>
              <ul>
                {movie.genres.map((g, idx) => (
                  <li key={`${idx}-${g}`}>{g}</li>
                ))}
              </ul>
            </MovieGenres>
            <MovieDescription>{movie.description_full}</MovieDescription>
          </MovieInfo>
        </Wrapper>
      )}
    </div>
  );
}

const shadow = `
box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  border-radius: 5px;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 100px auto;
  padding: 50px;
  height: calc(100vh - 200px);
  width: 90%;
  max-width: 1500px;
  background-color: #fff;
  ${shadow}
  overflow: hidden;
  .gallery {
    display: flex;
    align-items: end;
    gap: 10px;
    height: 300px;
  }
`;

const MoviePoster = styled.img`
  display: inline-block;
  width: 150px;
  ${shadow}
`;

const MovieShot = styled.img`
  display: inline-block;
  width: 300px;
  ${shadow}
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MovieTitle = styled.h1`
  margin: 30px 0 20px;
  font-weight: 700;
  text-decoration: underline 4px solid #ffc851;
  text-underline-offset: 2px;
  .first-letter {
    font-size: 60px;
    color: #ffc851;
    vertical-align: sub;
  }
  .letters {
    font-size: 34px;
    line-height: 50px;
    color: #000;
  }
`;

const InfoList = styled.dl`
  display: block;
  font-size: 20px;
  dt {
    display: inline-block;
    margin-right: 10px;
    font-weight: 700;
  }
  dd {
    display: inline-block;
  }
  dd + dt {
    margin-left: 30px;
  }
`;

const MovieGenres = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 30px;
  h3 {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
  }
  ul {
    display: inline-block;
    margin-left: 10px;
  }
  li {
    display: inline-block;
    margin: 0 5px 2px 0;
    padding: 2px 1px 0;
    font-size: 16px;
    line-height: 18px;
    background-color: #ffc851;
    color: #fff;
    text-transform: uppercase;
  }
`;

const MovieDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin: 10px 0;
  font-size: 18px;
  line-height: 1.4em;
  max-height: calc(5 * 1.4em);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Detail;
