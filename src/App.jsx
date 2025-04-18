import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage//HomePage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from "./pages/MoviesPage/MoviesPage";


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
