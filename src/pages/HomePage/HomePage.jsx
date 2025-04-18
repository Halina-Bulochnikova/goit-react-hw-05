import React, { useEffect, useState } from "react";
import { fetchTrending } from '../../servis/api';
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const result = await fetchTrending();
        setResults(result);
    };
    loadTrending();
  }, []);


  return <MovieList results={results} />;
}
export default HomePage;
