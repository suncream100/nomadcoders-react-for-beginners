import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [credit, setCredit] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const getMovie = async() => {
      const json = await (
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5984953a74d52b49b9aa45ad23721fa5`)
      ).json();
      setDetail(json);
      setLoading(false);
    };
    const getCredit = async() => {
      const json = await (
        await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5984953a74d52b49b9aa45ad23721fa5`)
      ).json();
      setCredit(json.cast.slice(0, 4));
      setLoading(false);
    }
    getMovie();
    getCredit();
  }, [id]);
  return (
    <div className="container">
      <div className="inner_container">
        <div className={styles.wrap_detail}>
          <div className={styles.bg_detail} style={detail.production_countries !== undefined ? {backgroundImage: `url(https://image.tmdb.org/t/p/w780${detail.backdrop_path})`} : null}></div>
          <div className={styles.box_detail}>
            <div className={styles.thumb_detail}>
              <img src={detail.poster_path ? (`https://image.tmdb.org/t/p/w200${detail.poster_path}`) : null} alt={`${detail.title} poster`}/>
            </div>
            <h1 className={styles.tit_detail}>{detail.title}</h1>
            <dl className={styles.info_detail}>
              <div>
                <dt>Release</dt>
                <dd>{detail.release_date ? detail.release_date : '-'} {detail.status}</dd>
              </div>
              <div>
                <dt>Runtime</dt>
                <dd>{detail.runtime ? detail.runtime : '-'}min</dd>
              </div>
              <div>
                <dt>Countries</dt>
                <dd>
                  {detail.production_countries !== undefined ? detail.production_countries.map((item,index) => (
                    <span key={index}>{item.iso_3166_1}</span>
                  )) : '-'}
                </dd>
              </div>
              <div>
                <dt>Genres</dt>
                <dd>
                  {detail.genres !== undefined ? detail.genres.map((item, index) => (
                    <span key={index}>{item.name}</span>
                  )) : '-'}
                </dd>
              </div>
              <div>
                <dt>Vote Average</dt>
                <dd>⭐️ {detail.vote_average ? detail.vote_average : '-'}</dd>
              </div>
              <div>
                <dt>Overview</dt>
                <dd>{detail.overview ? detail.overview : '-'}</dd>
              </div>
              <div>
                <dt>Homepage</dt>
                <dd>{detail.homepage ? (<a href={`${detail.homepage}`} rel="noreferrer" target="_blank">{detail.homepage}</a>) : '-'}</dd>
              </div>
              <div>
                <dt>Cast</dt>
                <dd>
                  <ul className={styles.list_cast}>
                    {credit.map((item) => (
                      <li key={item.id}>
                        <span className={styles.thumb_cast}>
                          <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={`${item.name}`}></img>
                        </span>
                        <span className={styles.cont_cast}>
                          <strong><span className="blind"></span>{item.name}</strong>
                          <span><span className="blind"></span>{item.character}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <Link to={`/`} className={styles.link_home}>
            <span className={styles.ico_back}>Back Home</span>
          </Link>
        </div>
      </div>
      {loading ? <Loading /> : null}
    </div>
  );
}

export default Detail;