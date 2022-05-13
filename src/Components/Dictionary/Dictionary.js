import React, { useState, Fragment } from "react"
import Card from "../UI/Card"
import classes from "../Dictionary/Dictionary.module.css"
import Results from "./Results"

export default function Dictionary(props) {
    const [word, setWord] = useState('')
    const [results, setResults] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            .then(data => {
                console.log(data[0])
                setResults({
                    word: data[0].word,
                    phonetics: data[0].phonetics,
                    meanings: data[0].meanings
                })
            })
    }

    function handleInput(event) {
        setWord(event.target.value)
    }

    return (
        <Fragment>
            <Card className={classes.Dictionary} >
                <form className="Dictionary" onSubmit={handleSubmit}>
                    <label htmlFor="word-lookup">What word do you want to look up?</label>
                    <input id="word-lookup" value={word} type="text" autoComplete="off" onChange={handleInput} ></input>
                </form>
            </Card>
            <Results results={results} />
        </Fragment>
    )
}