import React, { useEffect, useContext, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { MovieContext } from '../MovieContext';

function SingleMovie() {
    const { id } = useParams();

    let cleanedId = id.replace(':', '');

    const [movie, setMovie] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { API_URL } = useContext(MovieContext);

    const showMovies = async (apiUrl) => {
        setIsLoading(true);
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            showMovies(`${API_URL}&i=${cleanedId}`);
        }, 1000);

        return () => clearTimeout(timer);
    }, [cleanedId]);

    if (isLoading) {
        return (
            <div className="loadingContainer">
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img src={movie.Poster} alt={movie.Title} />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>
                    <p className=""></p>
                    <p className="card-text">{movie.Released}</p>
                    <p className="card-text">{movie.Genre}</p>
                    <p className="card-text">{movie.imdbRating} / 10</p>
                    <p className="card-text">{movie.Country}</p>
                    <NavLink to="/" className="back-btn">
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default SingleMovie;
