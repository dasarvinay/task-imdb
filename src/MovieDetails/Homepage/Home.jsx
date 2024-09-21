import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home_module.css';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=47981494ecb0541ad004b6c6a15a0baa&language=en-US')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then((data) => setPopularMovies(data.results))
            .catch((error) => console.error('Error fetching movies:', error));
    }, []);

    return (
        <>
            <div className="movie-carousel">
                <Carousel interval={3000} indicators={false} controls={true} pause={false}>
                    {popularMovies.map((movie) => (
                        <Carousel.Item key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <div className="carousel-image-container">
                                    <img
                                        className="d-block w-100 carousel-image"
                                        src={
                                            movie.backdrop_path
                                                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                                                : 'path_to_fallback_image.jpg' 
                                        }
                                        alt={movie.title || 'Movie backdrop'}
                                    />
                                    <div className="image-overlay"></div>
                                </div>
                                <Carousel.Caption>
                                    <h3 className="movie-title">{movie.title}</h3>
                                    <p className="movie-overview">{movie.overview}</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Home;





