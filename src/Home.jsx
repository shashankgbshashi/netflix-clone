import React from 'react'
import Row from "./Row"
import request from "./request"




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
            {RowList}
        </div>
    )
}
