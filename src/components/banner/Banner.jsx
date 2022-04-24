import React from "react";
import { useEffect, useState } from "react";
import instance from "../../api/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper";
import "swiper/css";
import "./banner.scss";
import { useCallback } from "react";

function Banner({ title, fetchUrl, isMovie }) {
     const [movies, setMovies] = useState([]);
     const navigate = useNavigate();
     useEffect(() => {
          async function fetchData() {
               const request = await instance.get(fetchUrl);
               setMovies(request.data.results.slice(0, 5));
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
          <div className="banner mb-1">
               <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                         delay: 5000,
                         disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
               >
                    {movies.map((movie) => (
                         <SwiperSlide key={movie.id}>
                              <div className="banner_bg">
                                   <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                        alt="Background"
                                   />
                                   <div className="container">
                                        <div className="banner_detail">
                                             <h2 className="banner_title mb-1">
                                                  {movie.original_title ||
                                                       movie.title ||
                                                       movie.name}
                                             </h2>
                                             <button
                                                  className="button banner_btn mb-1"
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
                                                  Watch now
                                             </button>
                                             <p className="banner_descr">
                                                  {movie.overview}
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     );
}

export default Banner;
