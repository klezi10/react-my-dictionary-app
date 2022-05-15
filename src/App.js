import React, { Fragment } from "react"
import Dictionary from "./Components/Dictionary/Dictionary"
import Header from "./Components/UI/Header"

export default function App() {
    return (
        <Fragment>
            <Header />
            <Dictionary defaultWord='cloud' />
            <footer>Coded by me</footer>
        </Fragment>
    )
}