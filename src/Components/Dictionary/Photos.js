import React from "react"
// import classes from "./Photos.module.css"
import Card from "../UI/Card"

export default function Photos(props) {

    if (props.photos) {
        return (
            <Card>
                <div className="Photos">
                    {props.photos.map(photo => {
                        return (
                            <a key={Math.random().toString()} href={photo.url} target="_blank" rel="noopener noreferrer">
                                <img src={photo.src.small} alt={photo.alt} 
                                />
                            </a>
                        )
                    })}
                </div>
            </Card>
        )
    } else {
        return null
    }
}