import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const {id} = useParams();
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.wrap_detail}>
      <Link to="/">Move Home</Link>
      {loading ? (
        <h1>Loading</h1> 
      ) : (
        <div className={styles.box_detail}>
          <h1>{detail.title}</h1>
          <div><img src={detail.medium_cover_image} alt={`${detail.title} Poster`} /></div>
          <dl>
            <div>
              <dt>Year</dt>
              <dd>{detail.year}</dd>
            </div>
            <div>
              <dt>Genres</dt>
              <dd>
                {detail.genres.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Rating</dt>
              <dd>{detail.rating}</dd>
            </div>
            <div>
              <dt>Description</dt>
              <dd>{detail.description_full}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}

export default Detail;