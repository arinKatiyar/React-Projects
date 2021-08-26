import React from 'react'
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

export default function App() {
    return (
        <>
        <div>
            <Navbar title="UPPER CASE" />
            <div className = "container my-3">
            <TextForm heading=" Please Enter Text Here"/>
            </div>
        </div>
        </>
    )
}
