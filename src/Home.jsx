import React from 'react'
import Row from "./Row"
import request from "./request"
import Banner from "./Banner"



export default function Home() {

    let RowList = request.map((value,index) => {
        return(
            <Row title={value.title} url={value.url} key={value.title}/>
        )
    })

    

    return (
        <div>
            {/* {request.map((value,index) => {
                return(
                    <Row title={value.title} url={value.url} key={value.title}/>
                )
            })} */}
            <Banner />
            {RowList}
        </div>
    )
}
