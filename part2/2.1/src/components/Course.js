import React from "react";
import Part from "./Part"
const Course = ({course})=>{
    return (
        <>
        <h1>{course.name}</h1>
        <ul>
        {course.parts.map(part => <Part key={part.id} part={part}/>)}
        </ul>
        <ul><b>
         total of {course.parts.reduce((noOfExercices, part)=>{ return noOfExercices + part.exercises}, 0)} excercises
        </b></ul>
        </>
    )
}

export default Course;