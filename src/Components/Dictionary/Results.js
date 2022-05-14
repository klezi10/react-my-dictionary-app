import React, { Fragment } from "react"
import classes from "./Results.module.css"
import Card from "../UI/Card"
import Meanings from "./Meanings"
import Phonetic from "./Phonetic"
import Photos from "./Photos"

export default function Results(props) {
    console.log(props.photos)
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
            <Photos photos={props.photos}/>
            {/* {props.photos.map(photo => {
                console.log(photo.id)
                return (
                    <Photos id={photo.id} key={Math.random().toString()} />
                )
            })} */}
        </Fragment>
    )
}