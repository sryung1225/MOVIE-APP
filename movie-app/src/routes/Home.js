import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";
import Loading from "../components/Loading.js";
import { styled } from "styled-components";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <Movies>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              coverImg={movie.medium_cover_image}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </Movies>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export default Home;
