function Movie({ key, coverImg, title, summary, genres }) {
  return (
    <div key={key}>
      <img src={coverImg} alt={`<${title}> poster`} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
