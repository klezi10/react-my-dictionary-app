import React from "react"
// import classes from "./Photos.module.css"
import Card from "../UI/Card"

export default function Photos(props) {
    console.log(props.photos.url)

    if (props.photos) {
        return (
            <Card>
                <div className="Photos">
                    {/* {props.photos.map(function (photo, index) {
                        return <img src={photo.src.landscape} key={index} />
                    })} */}




                    <p>Photos go here</p>
                <a href={props.photos.url} target="_blank" rel="noopener noreferrer">
                    <img src={props.photos.url} alt={props.photos.alt} />
                </a>
                </div>

            </Card>
        )
    } else {
        return null
    }
}