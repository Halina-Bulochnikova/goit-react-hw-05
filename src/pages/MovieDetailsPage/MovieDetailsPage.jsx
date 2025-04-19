import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState, useRef, Suspense } from "react";
import { fetchMoviesById } from "../../servis/api";
import { useLocation, useNavigate } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchMoviesById(movieId);
        setResult(data);
      } catch (error) {
        console.error("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);
  const setActiveClass = ({ isActive }) => {
          return clsx(css.link, isActive && css.active);
      };

  return loading ? (
    <p>Завантаження деталей...</p>
  ) : (
    <>
      <div className={css.movieDetailsPage}>
        <button
          onClick={() => navigate(backLinkRef.current)}
          style={{ marginBottom: "1rem" }}
        >
          ← Go back
        </button>
        {result.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
            alt={result.title}
            width={420}
            height={340}
          />
        )}
        <h2 className={css.titleMovie}>{result.title}</h2>
        <p className={css.textMovie}>
          {result.overview || "На жаль, ще немає опису..."}
        </p>
        <p className={css.textItemMovie}>
          Genres: {result.genres?.map((genre) => genre.name).join(", ")}
        </p>

        <nav className={css.navigationDet}>
          <NavLink className={setActiveClass} to="cast">
            Cast
          </NavLink>
          <NavLink className={setActiveClass} to="reviews">
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
export default MovieDetailsPage;