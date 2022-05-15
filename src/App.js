import React, { Fragment } from "react"
import Dictionary from "./Components/Dictionary/Dictionary"
import Header from "./Components/UI/Header"

export default function App() {
    return (
        <Fragment>
            <Header />
            <Dictionary defaultWord='wine' />
            <footer>Coded by Klesta | <a
                href="https://peppy-lily-de3cbc.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
            >Open-source</a> </footer>
        </Fragment>
    )
}