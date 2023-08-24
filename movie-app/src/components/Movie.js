import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Movie({ id, coverImg, year, title, summary, genres }) {
  return (
    <MovieItem key={id}>
      <MovieImg src={coverImg} alt={`<${title}> poster`} />
      <div>
        <MovieTitle>
          <Link to={`/movie/${id}`}>
            <span class="first-letter">{title.slice(0, 1)}</span>
            <span class="letters">{title.slice(1)}</span>
          </Link>
        </MovieTitle>
        <MovieYear>{year}</MovieYear>
        <MovieGenres>
          {genres.map((g, idx) => (
            <li key={`${idx}-${g}`}>{g}</li>
          ))}
        </MovieGenres>
        <MovieSummary>{summary}</MovieSummary>
      </div>
    </MovieItem>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MovieItem = styled.div`
  margin-bottom: 70px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const MovieImg = styled.img`
  position: relative;
  top: -30px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  border-radius: 5px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const MovieTitle = styled.h2`
  margin-bottom: 10px;
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

const yellowBox = `
  margin: 0 5px 2px 0;
  padding: 2px 1px 0;
  font-size: 14px;
  line-height: 14px;
  background-color: #ffc851;
  color: #fff;
  text-transform: uppercase;
`;

const MovieGenres = styled.ul`
  display: block;
  margin: 5px 0 3px;
  li {
    display: inline-block;
    ${yellowBox}
  }
`;

const MovieYear = styled.span`
  ${yellowBox}
`;

const MovieSummary = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  margin: 10px 0;
  line-height: 1.4em;
  max-height: calc(5 * 1.4em);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Movie;
