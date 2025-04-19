import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Header = lazy(() => import("./components/Header/Header"));
const NotFoundPage = lazy(() => import("../src/pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage//HomePage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));




function App() {
  return (
    <div>
      <Suspense fallback={<div>Працює Suspense</div>}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
