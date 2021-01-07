import React, { useState } from 'react';
import EditCourse from './EditCourse';

export default function Course(props){
    const { course, handleDelete, handleFetch } = props;
    const [user, setUser] = useState(localStorage.getItem("role"));
    const [toggleEdit, setToggleEdit] = useState(false);

    const toggler = () => {
        setToggleEdit(!toggleEdit);
    }

    const deleter = (e) => {
        e.preventDefault();
        handleDelete(course.id);
    }

    // Helper component that is rendered if instructor
    const Panel = () =>{
        return(
            <div>
                <button onClick={toggler}>{(toggleEdit) ? "Cancel" : "Edit"}</button>
                <button onClick={deleter}>Delete</button>
            </div>
        )
    }

    return (
        <div className="course-card">
            <h3>Name: {course.name}</h3>
            <h3>Type: {course.type}</h3>
            <h3>Date: {course.date}</h3>
            <h3>Start: {course.time}</h3>
            <h3>Duration: {course.duration}</h3>
            <h3>Intensity: {course.intensity}</h3>
            <h3>Location: {course.location}</h3>
            <h3>Attendees: {course.attendee_count}</h3>
            {(user === "instructor") ? <Panel /> : ""}
            {(toggleEdit) ? <EditCourse course={course} handleFetch={handleFetch} toggler={toggler} /> : ""}
        </div>
    )
}