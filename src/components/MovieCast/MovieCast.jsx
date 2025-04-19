import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCastByMoviesId } from "../../servis/api";

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
    <div>
      <ul>
        {casts.map((cast) => (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={cast.name}
              width="200px"
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
