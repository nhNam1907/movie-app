import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import instance from "../api/axios";
import Back from "../components/backBtn/Back";

import SearchMovies from "../components/searchMovies/SearchMovies";
const useQuery = () => new URLSearchParams(useLocation().search);
function Search() {
     const [result, setResult] = useState([]);
     const api_key = "41090b6e9480c4dfb5cf156b068cd2b3";
     const keywords = useQuery().get("keyword");
     const url = `/search/movie?api_key=${api_key}&language=en-US&include_adult=false&query=${keywords}`;
     console.log(keywords);
     useEffect(() => {
          async function fetchData() {
               const request = await instance.get(url);
               setResult(request.data.results);
               return request;
          }
          fetchData();
     }, [keywords, url]);

     return (
          <div className="container" style={{ marginTop: "6rem" }}>
               <Back />
               <SearchMovies result={result} />
          </div>
     );
}

export default Search;
