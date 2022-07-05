import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, year }) {
  return (
    <div>
      <Link to={`/movies/${id}`}>
        <div className={styles.container}>
          <img src={coverImg} />
          <div className={styles.explain}>
            <Link to={`/movies/${id}`}>
              <h2 className={styles.title}>
                {title} ({year})
              </h2>
            </Link>
            <p className={styles.summary}>
              {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
            </p>
            <ul className={styles.genres}>
              {genres?.map((g) => (
                <li key={g} className={styles.genre}>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
