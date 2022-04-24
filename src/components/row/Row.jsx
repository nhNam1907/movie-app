import React from "react";
import { useEffect, useState } from "react";
import instance from "../../api/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./row.scss";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Row({ title, fetchUrl, isMovie }) {
     const [movies, setNovies] = useState([]);
     const navigate = useNavigate();

     useEffect(() => {
          async function fetchData() {
               const request = await instance.get(fetchUrl);
               setNovies(request.data.results);
               return request;
          }
          fetchData();
     }, [fetchUrl]);

     const gotoMovieDetail = useCallback(
          (payload) => {
               navigate(`/detailMovie?id=${payload}`);
          },
          [navigate]
     );

     const gotoTvDetail = useCallback(
          (payload) => {
               navigate(`/detailTvShow?id=${payload}`);
          },
          [navigate]
     );

     return (
          <div>
               <div className="container">
                    <div className="row">
                         <div className="row_header mb-2">
                              <h2 className="row_title">{title}</h2>
                         </div>
                         <div className="row_posters">
                              <Swiper
                                   slidesPerView={"auto"}
                                   spaceBetween={10}
                                   breakpoints={{
                                        1024: {
                                             spaceBetween: 5,
                                        },
                                        1200: {
                                             spaceBetween: 6,
                                        },
                                        1600: {
                                             spaceBetween: 5,
                                        },
                                   }}
                              >
                                   {movies.map((movie) => (
                                        <SwiperSlide key={movie.id}>
                                             <div
                                                  className="movie_poster mb-1"
                                                  onClick={() =>
                                                       isMovie
                                                            ? gotoMovieDetail(
                                                                   movie.id
                                                              )
                                                            : gotoTvDetail(
                                                                   movie.id
                                                              )
                                                  }
                                             >
                                                  <img
                                                       src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                       alt="Poster"
                                                  />
                                             </div>
                                        </SwiperSlide>
                                   ))}
                              </Swiper>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Row;
