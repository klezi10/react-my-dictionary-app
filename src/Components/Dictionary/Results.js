import React from "react"
import classes from "./Results.module.css"
import Card from "../UI/Card"

export default function Results(props) {
    console.log(props.results)
  

    

    return (
        <Card className={classes.Results}>
            <h1>{props.results.word}</h1>
           <h3>{props.results.partOfSpeech}</h3>
           <p>{props.results.definitions}</p>
        </Card>

    )
}