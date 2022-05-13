import React from "react"
// import classes from "./Results.module.css"
// import Card from "../UI/Card"

export default function Results(props) {
    console.log(props.results)
  

    

    return (
        <div>
            <h2>{props.results.word}</h2>
           <h3>{props.results.partOfSpeech}</h3>
           <p>{props.results.definitions}</p>
        </div>

    )
}