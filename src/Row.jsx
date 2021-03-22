import React , {useEffect,useState} from 'react'
//import axios from "./axiosInstance"
import request from "./request"
import axios from "axios"
import "./Row.css"

const path = `https://image.tmdb.org/t/p/w500/`


export default function Row({title , url}) {

    const [movies,setMovies] = useState([])

    

    useEffect(() => {


        // Request for the movies information which is asynchronous

        async function getData(){
           try {
             let result = await axios.get(url);
             console.log(result.data.results);
             setMovies(result.data.results)            
            
           } catch (error) {
               console.log(error);
           }
        }

        getData();

    },[url])

    return (
        <>
            <div className="row">
                { /* title */}
                {title}
                <div className="posters">
                    {movies.map((value,index)=> {
                        
                        return (
                            <img className="poster"
                                key={value.id}
                            src={`${path}${value.poster_path}`} alt={value.name}/>
                            )
                    })}                    
                </div>
            </div>
            <h1>Hello</h1>
        </>
    )
};
