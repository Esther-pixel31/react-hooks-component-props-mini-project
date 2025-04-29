import React from "react"

export default function ReadingTime({minutes}) {
    let str = ''
    if (minutes >= 30) {
        let num = Math.ceil(minutes / 10)
        for (let i = 0; i < num; i++) {
            str += '🍱'
        }
    } else {
        let num = Math.ceil(minutes / 5)
        for (let i = 0; i < num; i++) {
            str += '☕️'
        }
    }
    return <span>{str + ` ${minutes} min read`}</span>
}