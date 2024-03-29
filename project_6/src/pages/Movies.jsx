import { React, useContext } from 'react'
import { MovieContext } from '../MovieContext'
import { Link } from 'react-router-dom';

function Movies() {

    const { movies } = useContext(MovieContext);

    return (
        <>
            {
                movies.map((currMovie) => {

                    const { Poster, Title, Year, imdbID } = currMovie;

                    return (
                        <Link to={`movie/:${imdbID}`} className="movie_card" key={imdbID}>
                            <div className="poster_wrapper">
                                <span className="year">{Year}</span>
                                <img src={Poster} />
                                <div className="movie_title">
                                    <h2>{Title}</h2>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Movies
