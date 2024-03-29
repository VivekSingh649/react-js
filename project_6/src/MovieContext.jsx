import React, { useEffect, useState } from "react";

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("Avengers");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  const showMovies = async (apiUrl) => {
    setIsLoading(true);
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search);
        setIsError({
          show: false,
          msg: "",
        })
      } else {
        setIsLoading(false);
        setMovies([]);
        setIsError({
          show: true,
          msg: data.Error,
        })
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      showMovies(`${API_URL}&s=${query}`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [query]);

  return (
    <MovieContext.Provider value={{ isLoading, movies, isError, query, setQuery, API_KEY, API_URL }}>{children}</MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };