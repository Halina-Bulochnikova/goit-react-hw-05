import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from "react";
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesByQuery } from "../../servis/api";

import { useSearchParams } from "react-router-dom";



const MoviesPage = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get("query") || "";
  


  useEffect(() => {
    const getData = async () => {
      if (!query){
        setResults([]);
        return;
      }
      try {
        const data = await fetchMoviesByQuery(query);
        setResults(data || []);
      } catch (error) {
        console.error("Error", error);
      }
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    const trimmed = newQuery.trim();
    setSearchParams(trimmed ? { query: trimmed } : {});
  };
  const filterMovies = results.filter((result) =>
    result.title.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <MovieList results={filterMovies} />
    </div>
  );
};
export default MoviesPage;
