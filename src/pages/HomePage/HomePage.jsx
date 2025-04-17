import React, { useEffect, useState } from "react";
import fetchTrending from "../../servis/api";
import TrendingList from '../../components/TrendingList/TrendingList';

const HomePage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const result = await fetchTrending();
        setResults(result);
    };
    loadTrending();
  }, []);


  return <TrendingList results={results} />;
}
export default HomePage;
