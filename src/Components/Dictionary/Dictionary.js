import React, { useState, Fragment } from "react"
import Card from "../UI/Card"
import classes from "../Dictionary/Dictionary.module.css"
import Results from "./Results"
import axios from 'axios'
import Photos from "./Photos"

export default function Dictionary(props) {
    const [word, setWord] = useState(props.defaultWord)
    const [results, setResults] = useState({ ready: false })
    const [photos, setPhotos] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        search()
    }

    function handleResponse(response) {
        setResults({
            ready: true,
            word: response.data[0].word,
            phonetics: response.data[0].phonetics,
            meanings: response.data[0].meanings
        })
    }

    function search() {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(handleResponse)
        
        axios.get(`https://api.pexels.com/v1/search?query=${word}&per_page=9`, {
            headers: {
                Authorization: "563492ad6f9170000100000129b7e51f759e42fda9eb92a0f1497aaf"
            }
        }).then(handlePhotoResponse)
    }

    function handlePhotoResponse(response) {
        setPhotos(response.data.photos)
    }

    function handleInput(event) {
        setWord(event.target.value)
    }

    return (
        results.ready ?
            < Fragment >
                <Card className={classes.Dictionary} >
                    <form className="Dictionary" onSubmit={handleSubmit}>
                        <label htmlFor="word-lookup">What word do you want to look up?</label>
                        <input
                            id="word-lookup"
                            value={word}
                            type="search"
                            autoComplete="off"
                            onChange={handleInput}
                            autoFocus='on'
                        ></input>
                    </form>
                    <small className="hint">example: wine, chocolate, coding, beach</small>
                </Card>
                <Results results={results} />
                <Photos photos={photos} />
            </Fragment >
            :
            search()
    )
}