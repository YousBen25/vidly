import './App.css';
import MovieTable from './components/MovieTable';
import { getMovies } from './services/fakeMovieService';


function App() {
  const movies = getMovies();
  return (
    <main className="container">
      <MovieTable movies={movies}/>
    </main>
  );
}

export default App;
