import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import instance from "../../api/axios";
import { api_Key } from "../../api/request";
import MovieDetail from "../movieAndTvDetail/MovieDetail";
import "./detail.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

function Detail() {
     const [externalId, setExternalId] = useState("");
     const ids = useQuery().get("id");

     const urlgetExternalId = `/movie/${ids}/external_ids?api_key=${api_Key}&language=en-US`;
     useEffect(() => {
          async function fetchData() {
               const request = await instance.get(urlgetExternalId);
               setExternalId(request.data.imdb_id);
               return request;
          }
          fetchData();
     }, [urlgetExternalId, ids]);

     return (
          <div>
               <MovieDetail externalId={externalId} ids={ids} />
          </div>
     );
}

export default Detail;
