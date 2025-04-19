import React, { useEffect, useState } from "react";
import { fetchTrending } from "../../servis/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const result = await fetchTrending();
      setResults(result);
    };
    loadTrending();
  }, []);

  return (
    <div>
      <h2 className={css.HomePageTitle}>Trending today</h2>
      <MovieList results={results} />
    </div>
  );
};
export default HomePage;
