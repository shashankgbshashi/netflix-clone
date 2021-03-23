import React from "react";

const API_KEY = "71eda84661b8b91bbf4dfebc329e4a2d";



// const request = {
//     fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
//     fetchHorrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
   
//     fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,

// };

const request = [
    {
        title : "Netflix Originals",
        url : `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
    },
    {
        title : "Trending Movies",
        url : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    },
    {
        title : "Horror Movies",
        url : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    {
        title : "Comedy Movies",
        url : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    {
        title : "Action Movies",
        url : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    {
        title : "Romance Movies",
        url : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    {
        title : "TopRated Movies",
        url : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    {
        title : "Documentaries",
        url : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
    }
    
]

export default request;
