const API_KEY = "8f8eee6f0742431bb99748e1c4c382b6";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genre=2`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genre=1074`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genre=99`,
}

export default requests;