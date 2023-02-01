import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, index, poster_path, title, release_date, vote_average, overview}) {
  return <Link to={`/movie/${id}`} className={styles.item_movie}>
    <span className={styles.rank} aria-label={`Rank ${index+1}`}>{index+1}</span>
    <div className={styles.thumb_movie}>
    <img src={poster_path ? (`https://image.tmdb.org/t/p/w200${poster_path}`) : null} alt={`${title} poster`}/>
    </div>
    <div className={styles.cont_movie}>
      <h2 className={styles.tit_movie}>{title}</h2>
      <dl className={styles.info_movie}>
        <dt className="blind">Release date</dt>
        <dd>📅 {release_date}</dd>
        <dt className="blind">Vote Average</dt>
        <dd>⭐️ {vote_average}</dd>
      </dl>
      <p className={styles.desc_movie}>
        {overview.length > 200 ? `${overview.slice(0, 200)}...` : overview}
      </p>
    </div>
  </Link>
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  poster_path : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  release_date : PropTypes.string.isRequired,
  vote_average : PropTypes.number.isRequired,
  overview : PropTypes.string.isRequired,
}

export default Movie;