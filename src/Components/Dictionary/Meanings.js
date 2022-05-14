import React from "react"
import classes from "./Meanings.module.css"
import Card from "../UI/Card"

export default function Meanings(props) {
    console.log(props.meaning.partOfSpeech)
    return (
        <Card className={classes.Meanings}>
            <h3>{props.meaning.partOfSpeech}</h3>
        </Card>
    )
}