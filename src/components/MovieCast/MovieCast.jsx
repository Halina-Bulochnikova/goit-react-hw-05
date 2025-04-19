import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCastByMoviesId } from "../../servis/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastByMoviesId(movieId);
        setCasts(data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div className={css.movieCast}>
    <ul className={css.castList}>
        {casts.map((cast) => (
          <li key={cast.id} className={css.castItem}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={cast.name}
              width="200px"
            />
            <p className={css.castText}>{cast.name}</p>
            <p className={css.castText}>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
