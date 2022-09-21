import React from "react";
import Part from "./Part"
const Course = ({course})=>{
    return (
        <>
        <h1>{course.name}</h1>
        <ul>
        {course.parts.map(part => <Part key={part.id} part={part}/>)}
        </ul>
        </>
    )
}

export default Course;