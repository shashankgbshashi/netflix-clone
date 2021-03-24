import React from 'react'
import Row from "./Row"
import request from "./request"
import Banner from "./Banner"
import Navbar from "./Navbar"


export default function Home() {

    let RowList = request.map((value,index) => {
        return(
            <Row title={value.title} url={value.url} key={value.title}/>
        )
    })

    

    return (
        <div>
            <Navbar />            
            <Banner />
            {RowList}
            <div className="footer" style={{
                height:"30px"
            }}/>
        </div>
    )
}
