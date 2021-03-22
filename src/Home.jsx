import React from 'react'
import Row from "./Row"
import request from "./request"

export default function Home() {
    return (
        <div>
            <Row title="Trending Movies" url={request.fetchNetflixOriginals} />
        </div>
    )
}
