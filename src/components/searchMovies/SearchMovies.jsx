import React from "react";
import "./searchmovies.scss";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
function SearchMovies({ result }) {
     const navigate = useNavigate();
     const gotoMovieDetail = useCallback(
          (payload) => {
               navigate(`/detailMovie?id=${payload}`);
          },
          [navigate]
     );
     return (
          <div className="container_search">
               {result && result.length > 0 ? (
                    <div className="movies">
                         {result.map((movie) => (
                              <div
                                   className="movie"
                                   key={movie.id}
                                   onClick={() => gotoMovieDetail(movie.id)}
                              >
                                   <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt="Poster"
                                        className="movie-img"
                                   />
                              </div>
                         ))}
                    </div>
               ) : (
                    <p className="text">not found</p>
               )}
          </div>
     );
}

export default SearchMovies;
