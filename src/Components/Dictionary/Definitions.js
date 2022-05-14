import React from "react"
import "./Definitions.css"

export default function Definitions(props) {
    return (
        <div className="Definitions">
            {props.definition.map(define => {
                return (
                    <div key={Math.random().toString()}>
                        <div className="definition-block">
                            <p className="definition"> {define.definition} </p>
                            <p className="example">{define.example}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}