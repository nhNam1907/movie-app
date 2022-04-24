import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.scss";
import netflixLogo from "../../assets/img/netflixLogo.png";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

function Header() {
     const [keyword, setKeyword] = useState("");
     const navigate = useNavigate();

     const goToSearch = useCallback(() => {
          if (keyword.trim().length > 0) {
               navigate(`/search?keyword=${keyword.trim()}`);
          }
     }, [keyword, navigate]);

     useEffect(() => {
          const changeBackgroundColor = () => {
               const header = document.querySelector(".header_wrap");
               if (window.scrollY >= 80) {
                    header.style.backgroundColor = "black";
               } else {
                    header.style.backgroundColor = "transparent";
               }
          };
          window.addEventListener("scroll", changeBackgroundColor);
          return () => {
               window.removeEventListener("scroll", changeBackgroundColor);
          };
     }, []);

     useEffect(() => {
          const enterEvent = (e) => {
               e.preventDefault();
               if (e.keyCode === 13) {
                    goToSearch();
               }
          };
          document.addEventListener("keyup", enterEvent);
          return () => {
               document.removeEventListener("keyup", enterEvent);
          };
     });

     const handleShowInput = (e) => {
          e.preventDefault();
          const inputSearch = document.querySelector(".header_search-input");
          inputSearch.classList.toggle("header_search-input-active");
     };

     return (
          <div className="header_wrap">
               <div className="container">
                    <div className="header">
                         <nav className="header_nav">
                              <NavLink to="/" className="header_nav-logo">
                                   <img src={netflixLogo} alt="Netflix" />
                              </NavLink>

                              <ul className="header_nav-menu">
                                   <li className="header_nav-item active">
                                        <NavLink to="/">Movies</NavLink>
                                   </li>
                                   <li className="header_nav-item">
                                        <NavLink to="/tvshows">TvShows</NavLink>
                                   </li>
                              </ul>
                         </nav>
                         <div className="header_search">
                              <input
                                   value={keyword}
                                   onChange={(e) => setKeyword(e.target.value)}
                                   type="text"
                                   className="header_search-input"
                                   placeholder="Enter name movie"
                              />
                              <i
                                   className="fa fa-search"
                                   onClick={handleShowInput}
                              ></i>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Header;
