import React, { Fragment } from "react"
import classes from "./Results.module.css"
import Card from "../UI/Card"
import Meanings from "./Meanings"
import Phonetic from "./Phonetic"

export default function Results(props) {
    return (
        <Fragment>
            <Card className={classes.Results}>
                <h1>{props.results.word}</h1>

                {props.results.phonetics.map(phonetic => {
                    return <Phonetic phonetic={phonetic} key={Math.random().toString()} />
                })}
                
            </Card>
            {props.results.meanings.map(meaning => {
                return (
                    <Meanings meaning={meaning} key={Math.random().toString()} />
                )
            })}
        </Fragment>
    )
}