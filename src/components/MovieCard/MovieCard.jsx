import styles from './MovieCard.module.css';
import { Title } from '../Title/Title';

export function MovieCard(props) {
  return (
    <div className={styles['card']}>
      <div className={styles['head']}>
        <img className={styles['poster']} src={props.img} alt="Постер фильма" />
        <span className={styles['rating']}>{props.rating}</span>
      </div>

      <Title tag={'h4'}>{props.name}</Title>
      <span className={styles['favorites']}>В избранное</span>
    </div>
  );
}
