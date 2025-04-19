import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewsByMoviesId } from "../../servis/api";

const MovieReviews = () => {
const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      const getData = async () => {
        try {
          const data = await fetchReviewsByMoviesId(movieId);
          setReviews(data);
        } catch (error) {
          console.error("Error", error);
        }
      };
      getData();
    }, [movieId]);
            
  return (
    <div>
      {reviews.length === 0 ? (
        <p>There are no reviews for this film</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>Autor:</strong> {review.author}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieReviews;
