import React, {useEffect,useState} from 'react'
import "./Banner.css"
import request from "./request"
import axios from "axios"

function truncate(str,n){
    return str.len < 150 ? str : str.substr(0,n-1)+"..."
}

export default function Banner() {

    
    const [movies,setMovie] = useState({
        name : "",
        backgroundURL : "",
        overview : ""
    })
    useEffect(() => {
        let netflixOriginalsURL = request[0].url;
        async function fetchData(){
            try {
                let result = await axios.get(netflixOriginalsURL);
                //console.log(result.data.results);
                let index = Math.floor(Math.random() * result.data.results.length);
                let movie = result.data.results[index]
                //console.log(movie)
                setMovie({
                    name : movie?.name || movie?.original_name || movie?.original_title,
                    backgroundURL : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                    overview : movie.overview
                })
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])
    console.log(movies);
    return (
        <header>
            <div className="Banner" style={{
                backgroundImage : `url(${movies.backgroundURL})`,
                backgroundSize : "cover",
                backgroundPosition : "center center"

            }}>

                <div className="Banner__content">
                    <div className="Banner_title">
                        <h1>{movies.name}</h1>
                    </div>
                    <div className="Banner__button">
                        <button>Play</button>
                        <button>Details</button>
                    </div>
                    <div className="Banner__overview">
                        {truncate(movies.overview,150)}
                    </div>
                </div>
                <div className="Banner__footer" />
            </div>
            <br></br>
                    
                
            
        </header>
    )
}
