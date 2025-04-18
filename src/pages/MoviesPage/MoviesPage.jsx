import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigate } from "react-router-dom";


const MoviesPage = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (!query) return;
    navigate(`?query=${encodeURIComponent(query)}`);
  };


  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
};
export default MoviesPage;
