import React , {useEffect,useState} from 'react'
//import axios from "./axiosInstance"
import request from "./request"
import axios from "axios"
import "./Row.css"
import YouTube from "./YoutubeCom"
import movieTrailer from "movie-trailer"
//import axios from "axios"

const path = `https://image.tmdb.org/t/p/w500/`



export default function Row({title , url}) {

    const [movies,setMovies] = useState([])

    const [trailer,setTrailer] = useState("");
    

    useEffect(() => {


        // Request for the movies information which is asynchronous

        async function getData(){
           try {
             let result = await axios.get(url);
             //console.log(result.data.results);
             setMovies(result.data.results)            
            
           } catch (error) {
               console.log(error);
           }
        }

        getData();

    },[url])

    let getTrailerURL = async (movie) => {
        if(trailer === ""){
        
        try {
            let trailerurl = await axios.get(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=71eda84661b8b91bbf4dfebc329e4a2d`
              );
            //console.log(trailerurl);
            setTrailer(trailerurl.data.results[0]?.key);  
        } catch (error) {
            console.log(error)
        }
    }else
        setTrailer("");
             
    }
    console.log(trailer)
    let movieList = movies.map((value,index) => {
        
        if(title === "Netflix Originals"){
        return(
            <img className="poster netflix__originals"
                key={value.id}
                src={`${path}${value.poster_path}`} alt={value.name} title={
                    value?.name || value?.original_title || value?.original_name
                }
                    onClick={()=>getTrailerURL(value)}
                />
        )}else{
           return( <img className="poster"
                key={value.id}
                src={`${path}${value.backdrop_path}`} alt={value.name} title={
                    value?.name || value?.original_title || value?.original_name
                }
                    onClick={()=>getTrailerURL(value)}
                />
           )
        }
        
    });

    return (
        <>
            <div className="row">
                { /* title */}
               <h3> {title} </h3>
                <div className="posters">
                    {movieList}
                </div>
                <YouTube trailer={trailer}/>


            </div>
            
        </>
    )
};
