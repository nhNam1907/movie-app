import React from "react";
import request from "../api/request";
import Banner from "../components/banner/Banner";
import Row from "../components/row/Row";

function Movies() {
     return (
          <div>
               <Banner
                    title={"Popular Movies"}
                    fetchUrl={request.fetchPopularMovie}
                    isMovie={true}
               />
               <Row
                    title="Trending Now"
                    fetchUrl={request.fetchTrending}
                    isMovie={true}
               />
               <Row
                    title="Top Rated Movie"
                    fetchUrl={request.fetchTopRated}
                    isMovie={true}
               />
               <Row
                    title="Action Movie"
                    fetchUrl={request.fetchActionMovies}
                    isMovie={true}
               />
               <Row
                    title="Comedy Movie"
                    fetchUrl={request.fetchComedyMovies}
                    isMovie={true}
               />
               <Row
                    title="Horror Movie"
                    fetchUrl={request.fetchHonorMovies}
                    isMovie={true}
               />
               <Row
                    title="Documentaries"
                    fetchUrl={request.fetchDocumentaries}
                    isMovie={true}
               />
          </div>
     );
}

export default Movies;
