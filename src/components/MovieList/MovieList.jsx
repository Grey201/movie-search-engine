import './MovieList.css';
import { MovieCard } from '../MovieCard/MovieCard';

export function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
