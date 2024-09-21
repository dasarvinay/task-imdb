import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card_module.css";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? (
        <Card className="cards">
          <Skeleton height={300} />
          <Card.Body>
            <Skeleton width="60%" style={{ marginTop: "10px" }} />
            <Skeleton width="80%" />
          </Card.Body>
        </Card>
      ) : (
        <Link to={`/movies/${movie.id}`} className="custom-link">
          <Card className="cards">
            <Card.Img
              variant="top"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : "path_to_default_image.jpg"
              }
              className="cards__img"
              alt={movie.original_title || "Movie Poster"}
            />
            <Card.ImgOverlay className="cards__overlay">
              <Card.Title className="card__title">
                {movie.original_title}
              </Card.Title>
              <Card.Text className="card__runtime">
                {movie.release_date}
                <span className="card__rating">
                  {movie.vote_average}
                  <i className="fas fa-star" />
                </span>
              </Card.Text>
              <Card.Text className="card__description">
                {movie.overview
                  ? movie.overview.slice(0, 118) + "..."
                  : "No description available."}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Link>
      )}
    </>
  );
};

export default Cards;





