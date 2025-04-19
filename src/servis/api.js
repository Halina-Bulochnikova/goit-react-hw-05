import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjA2ZDExNDUzYzllMTdkOTk3NjQyN2NiNmJhNjc0MyIsIm5iZiI6MTc0NDc1MTkwMS4zMDQ5OTk4LCJzdWIiOiI2N2ZlY2QxZGMxZTBhNzA4Y2JhZDc0YjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fLwmM32MlOrybG-6npiYFE-XWK7KDyZgWuG0FRiGynQ";

const options = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
export const fetchTrending = async () => {
  try {
    const response = await options.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error.message);
    return [];
  }
};



export const fetchMoviesById = async (movieId) => {
  try {
    const response = await options.get(`/movie/${movieId}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error.message);
    throw error;
  }
};

export const fetchCastByMoviesId = async (movieId) => {
  try {
    const response = await options.get(`/movie/${movieId}/credits?language=en-US`);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie credits:", error.message);
    throw error;
  }
};
export const fetchReviewsByMoviesId = async (movieId) => {
  try {
    const response = await options.get(
      `/movie/${movieId}/reviews?language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error.message);
    throw error;
  }
};
