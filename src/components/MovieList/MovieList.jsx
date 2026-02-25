import styles from './MovieList.module.css';
import { MovieCard } from '../MovieCard/MovieCard';

export function MovieList({ movies }) {
  return (
    <div className={styles['movie-list']}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
