import React from "react";
import request from "../api/request";
import Banner from "../components/banner/Banner";
import Row from "../components/row/Row";

function TvShows() {
     return (
          <div>
               <Banner fetchUrl={request.fetchTvPopular} isMovie={false} />

               <Row
                    title="Top Rated"
                    fetchUrl={request.fetchTvTopRated}
                    isMovie={false}
               />
               <Row
                    title="Tv On The Air"
                    fetchUrl={request.fetchTvOnAir}
                    isMovie={false}
               />
               <Row
                    title="Tv Airing Today"
                    fetchUrl={request.fetchTvAiringToday}
                    isMovie={false}
               />
          </div>
     );
}

export default TvShows;
