import './MovieCard.css';
import { Title } from '../Title/Title';

export function MovieCard(props) {
  return (
    <div className="card">
      <div className="head">
        <img className="poster" src={props.img} alt="Постер фильма" />
        <span className="rating">
          {props.rating}
          {/* <p className="rating-count"></p> */}
        </span>
      </div>

      <Title tag={'h4'}>{props.name}</Title>
      <span className="favorites">В избранное</span>
    </div>
  );
}
