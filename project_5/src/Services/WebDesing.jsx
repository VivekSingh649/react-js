import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function WebDesing() {
    const { forWeb } = useParams();

    return (
        <>
            <h1>Web Desing : {forWeb}</h1>
        </>
    )
}

export default WebDesing
