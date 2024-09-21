import React, { useEffect, useState } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const [error, setError] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        if (!response.ok) throw new Error("Failed to fetch movie data");
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError("Error fetching movie details. Please try again later.");
        console.error("Error fetching movie data:", error);
      }
    };

    getData();
    window.scrollTo(0, 0); 
  }, [id]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!currentMovieDetail) {
    return <div className="loading">Loading movie details...</div>; 
  }

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.backdrop_path ?? ""}`}
          alt={`${currentMovieDetail?.original_title ?? "Movie"} backdrop`}
        />
      </div>

      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.poster_path ?? ""}`}
              alt={`${currentMovieDetail?.original_title ?? "Movie"} poster`}
            />
          </div>
        </div>

        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <h2 className="movie__name">
              {currentMovieDetail?.original_title ?? "Title unavailable"}
            </h2>
            <p className="movie__tagline">
              {currentMovieDetail?.tagline ?? "No tagline available"}
            </p>
            <div className="movie__rating">
              {currentMovieDetail?.vote_average ? (
                <>
                  {currentMovieDetail.vote_average} <i className="fas fa-star" />
                  <span className="movie__voteCount">
                    {`(${currentMovieDetail.vote_count} votes)`}
                  </span>
                </>
              ) : (
                "No rating available"
              )}
            </div>
            <p className="movie__runtime">
              {currentMovieDetail?.runtime ? `${currentMovieDetail.runtime} mins` : "Runtime not available"}
            </p>
            <p className="movie__releaseDate">
              {currentMovieDetail?.release_date ? `Release date: ${currentMovieDetail.release_date}` : "Release date not available"}
            </p>
            <div className="movie__genres">
              {currentMovieDetail?.genres?.length ? (
                currentMovieDetail.genres.map((genre) => (
                  <span key={genre.id} className="movie__genre">
                    {genre.name}
                  </span>
                ))
              ) : (
                <span>No genres available</span>
              )}
            </div>
          </div>

          <div className="movie__detailRightBottom">
            <h3 className="synopsisText">Synopsis</h3>
            <p>{currentMovieDetail?.overview ?? "No synopsis available."}</p>
          </div>
        </div>
      </div>

      <div className="movie__links">
        <h3 className="movie__heading">Useful Links</h3>
        {currentMovieDetail?.homepage ? (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        ) : (
          <p>No homepage available</p>
        )}
        {currentMovieDetail?.imdb_id ? (
          <a
            href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        ) : (
          <p>No IMDb link available</p>
        )}
      </div>

      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {currentMovieDetail?.production_companies?.length ? (
          currentMovieDetail.production_companies.map((company) =>
            company.logo_path ? (
              <span key={company.id} className="productionCompanyImage">
                <img
                  className="movie__productionCompany"
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                  alt={company.name}
                />
                <span>{company.name}</span>
              </span>
            ) : (
              <span key={company.id}>{company.name}</span>
            )
          )
        ) : (
          <p>No production companies available</p>
        )}
      </div>
    </div>
  );
};

export default Movie;


