import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    const movie = json.data.movie;
    setInfo(movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <img src={info.large_cover_image} />

          <div className={styles.info}>
            <h1 className={styles.title}>
              {info.title} ({info.year})
            </h1>
            <ul className={styles.ul}>
              {info.genres?.map((g) => (
                <li key={g} className={styles.genre}>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
