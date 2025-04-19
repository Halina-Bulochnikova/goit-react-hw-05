import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMoviesById } from "../../servis/api";
import { useLocation, useNavigate } from "react-router-dom";

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

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <button
        onClick={() => navigate(backLinkRef.current)}
        style={{ marginBottom: "1rem" }}>
        ← Go back
      </button>
      {result.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
          alt={result.title}
        />
      )}
      <h2>{result.title}</h2>
      <p>{result.overview || "Not describe"}</p>
      <p>Genres: {result.genres?.map((genre) => genre.name).join(", ")}</p>

      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default MovieDetailsPage;