import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // then대신에 async-await를 보편적으로 사용함
    // await을 감싸는 await을 만들 수 있음
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=5984953a74d52b49b9aa45ad23721fa5`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <h1 className={styles.title}>
          <span>Popular Movie</span> 😎
        </h1>
        <ul className={styles.list_movie}>
          {movies.map((item, index) => (
            <li key={item.id}>
              <Movie
                id={item.id}
                index={index}
                poster_path={item.poster_path}
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            </li>
          ))}
        </ul>
      </div>
      {loading ? <Loading /> : null}
    </div>
  );
}

export default Home;
