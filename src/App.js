import React, { Fragment } from "react"
import Dictionary from "./Components/Dictionary/Dictionary"

export default function App() {
    return (
        <Fragment>
            <Dictionary defaultWord='wine' />
            <footer>Coded by me</footer>
        </Fragment>
    )
}