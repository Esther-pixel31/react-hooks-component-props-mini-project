import React from "react";
import ReadingTime from "./ReadingTime";

export default function Article({title, date = 'January 1, 1970', preview, minutes}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} <ReadingTime minutes={minutes} /></small>
            <p>{preview}</p>
        </article>
    )
}