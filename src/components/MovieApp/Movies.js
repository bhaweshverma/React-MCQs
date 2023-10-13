import Search from "./Search";
import { useMovieContext } from "../../utilities/context";
import "./MoviesApp.css";
import { Link, NavLink } from "react-router-dom";

const Movies = () => {
  const { movieData } = useMovieContext();

  console.log(movieData);

  return (
    <>
      <Search />
      <section className="movie-page">
        <div className="movie-container movie-grid">
          {movieData.map((movie) => {
            const { imdbID, Title, Poster } = movie;
            const movieName =
              Title.length > 15
                ? Title.substring(0, 15).trim() + "..."
                : Title.substring(0, 15);
            return (
              <Link to={"/movies/" + imdbID} key={imdbID}>
                <div className="movie-card">
                  <div className="movie-card-info">
                    <h3>{movieName}</h3>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
