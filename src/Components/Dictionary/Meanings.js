import React from "react"
import classes from "./Meanings.module.css"
import Card from "../UI/Card"
import Definitions from "./Definitions"

export default function Meanings(props) {
    return (
        <Card className={classes.Meanings}>
            <h4>{props.meaning.partOfSpeech}</h4>
                <Definitions definition={props.meaning.definitions} />
        </Card>
    )
}