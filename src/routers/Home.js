import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5")
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rotten Potato</h1>
      {loading ? (
        <h1 className={styles.loading}>Loading....</h1>
      ) : (
        <div className={styles.main}>
          {movies.map((movie) => (
            <Movie
              year={movie.year}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              key={movie.id}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
