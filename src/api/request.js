

export const api_Key = '41090b6e9480c4dfb5cf156b068cd2b3';

const request = {
    fetchPopularMovie: `/movie/popular?api_key=${api_Key}&language=en-US`,
    fetchTrending: `/trending/movie/week?api_key=${api_Key}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=41090b6e9480c4dfb5cf156b068cd2b3`,
    fetchActionMovies: `/discover/movie?api_key=${api_Key}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_Key}&language=en-US&with_genres=35`,
    fetchHonorMovies: `/discover/movie?api_key=${api_Key}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_Key}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_Key}&language=en-US&with_genres=99`,
    fetchTvPopular: `/tv/popular?api_key=${api_Key}&language=en-US`,
    fetchTvAiringToday: `/tv/airing_today?api_key=${api_Key}&language=en-US`,
    fetchTvOnAir: `/tv/on_the_air?api_key=${api_Key}&language=en-US`,
    fetchTvTopRated: `/tv/top_rated?api_key=${api_Key}&language=en-US`,


}

export default request;



