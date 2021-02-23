import './App.css';
import { getMovies } from './services/fakeMovieService';

import Movies from './components/Movies';


function App() {
  const movies = getMovies();
  return (
    <main className="container">
      <Movies />
    </main>
  );
}

export default App;
