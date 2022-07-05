import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
