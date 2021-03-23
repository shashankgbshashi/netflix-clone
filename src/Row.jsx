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
             //console.log(result.data.results);
             setMovies(result.data.results)            
            
           } catch (error) {
               console.log(error);
           }
        }

        getData();

    },[url])

    let movieList = movies.map((value,index) => {
        //console.log(title)
       // console.log(value);
        if(title === "Netflix Originals"){
        return(
            <img className="poster netflix__originals"
                key={value.id}
                src={`${path}${value.poster_path}`} alt={value.name} title={
                    value?.name || value?.original_title || value?.original_name
                }/>
        )}else{
           return( <img className="poster"
                key={value.id}
                src={`${path}${value.backdrop_path}`} alt={value.name} title={
                    value?.name || value?.original_title || value?.original_name
                }
                    
                />
           )
        }
        
    })

    return (
        <>
            <div className="row">
                { /* title */}
               <h1> {title} </h1>
                <div className="posters">
                    {/* {movies.map((value,index)=> {
                        
                        return (
                            <img className="poster"
                                key={value.id}
                            src={`${path}${value.backdrop_path}`} alt={value.name} title={value?.name || value?.original_title || value?.original_name}/>
                            )
                    })}                     */}
                    {movieList}
                </div>
            </div>
            
        </>
    )
};
