//Context API - want to access some info from Parent to n-th children
//Provider (delivery boy)
//Consumer (useContext())
import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, message: "" });
  const [searchQuery, setSearchQuery] = useState("titanic");

  const getMovies = async (url) => {
    try {
      let response = await fetch(url);
      let json = await response.json();
      //console.log(json);
      if (json.Response === "True") {
        setIsLoading(false);
        setMovieData(json.Search);
        setIsError({ show: false, message: "" });
      } else {
        setIsError({
          show: true,
          message: json.Error,
        });
        //setMovieData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //let timerId = setTimeout(() => {
    getMovies(`${API_URL}&s=${searchQuery}`);
    //}, 3000);

    //return () => clearTimeout(timerId);
  }, [searchQuery]);

  return (
    <AppContext.Provider
      value={{ movieData, isLoading, isError, searchQuery, setSearchQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};
//custom hook - useMovieContext
const useMovieContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider, useMovieContext };
