import React, { useState, useEffect } from "react";
import instance from "../../api/axios";
import { api_Key } from "../../api/request";
import "./moviedetail.scss";
import Back from "../../components/backBtn/Back";

function MovieDetail({ externalId, ids }) {
     const [movie, setMovie] = useState({});
     const [credit, setCredit] = useState([]);
     const [trailerUrl, setTrailerUrl] = useState([]);
     const urlGetMovie = `/find/${externalId}?api_key=${api_Key}&language=en-US&external_source=imdb_id`;
     const urlgetTrailer = `/movie/${ids}/videos?api_key=${api_Key}&language=en-US`;
     const urlGetCredit = `/movie/${ids}/credits?api_key=${api_Key}&language=en-US`;
     useEffect(() => {
          async function fetchData() {
               const request = await instance.get(urlGetMovie);
               setMovie(request.data.movie_results[0]);
               return request;
          }
          fetchData();
     }, [urlGetMovie, externalId]);

     useEffect(() => {
          async function fetchVideo() {
               const request = await instance.get(urlgetTrailer);
               setTrailerUrl(request.data.results.slice(0, 3));
               return request;
          }
          fetchVideo();
     }, [ids, urlgetTrailer]);
     useEffect(() => {
          async function fetchCredit() {
               const request = await instance.get(urlGetCredit);
               setCredit(request.data.cast.slice(0, 4));
               return request;
          }
          fetchCredit();
     }, [ids, urlGetCredit]);
     return (
          <div>
               <div className="movie_detail_section">
                    <img
                         src={`https://image.tmdb.org/t/p/original/${
                              movie.backdrop_path
                                   ? movie.backdrop_path
                                   : movie.poster_path
                         }`}
                         alt="Background"
                         className="movie_detail_background"
                    />
                    <div className="container">
                         <div className="movie_detail_wrap">
                              <div className="mb-2">
                                   <Back />
                              </div>
                              <div className="movie_detail_primary mt-2">
                                   <div className="movie_detail_poster">
                                        <img
                                             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                             alt="Poster"
                                        />
                                   </div>
                                   <div className="movie_detail_wrap_title">
                                        <h2 className="movie_detail_name">
                                             {movie.original_title ||
                                                  movie.title}
                                        </h2>

                                        <p className="movie_detail_rated">
                                             Vote:{" "}
                                             <i className="fa fa-star"></i>{" "}
                                             {movie.vote_average}
                                        </p>

                                        <p className="movie_detail_release_date">
                                             Release date: {movie.release_date}
                                        </p>

                                        <p className="movie_detail_overview">
                                             Overview: {movie.overview}
                                        </p>

                                        <div
                                             className="movie_detail_casts"
                                             style={{ color: "white" }}
                                        >
                                             <h5>Casts: </h5>
                                             {credit.map((cast, index) => (
                                                  <p
                                                       className="movie_detail_cast"
                                                       key={index}
                                                  >
                                                       {cast.name ||
                                                            cast.original_name}
                                                  </p>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="movie_detail_trailers mt-3 container">
                    {trailerUrl.map((item, index) => (
                         <div className="movie_detail_trailer mb-2" key={index}>
                              <iframe
                                   className="movie_detail_iframe"
                                   src={`http://www.youtube.com/embed/${item.key}`}
                                   title="Movie Trailer"
                              ></iframe>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default MovieDetail;
