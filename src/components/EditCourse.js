import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export default function EditCourse(props){
    const { course, handleFetch, toggler } = props;
    const workingValues = {
        name: course.name,
        type: course.type,
        time: course.time,
        date: course.date,
        duration: course.duration,
        intensity: course.intensity,
        location: course.location,
        max_size: course.max_size,
        id: course.id
    }
    const [newClass, setNewClass] = useState(workingValues);

    const handleChange = e => {
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/classes/${course.id}`, newClass)
            .then(res => {
                console.log(res)
                toggler();
                handleFetch();
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div className="course-card">
            <h1>Update {course.name}</h1>
            <form classname="edit-course-form" onSubmit={handleSubmit}>
                <label>
                    <h3 className="edit-header" >Class Name:</h3>
                    <input name="name" value={newClass.name} onChange={handleChange} required />
                </label>
                <label>
                    <h3 className="edit-header" >Class Type:</h3>
                    <input name="type" value={newClass.type} onChange={handleChange} required />
                </label>
                <label>
                    <h3 className="edit-header" >Date:</h3>
                    <input name="date" value={newClass.date} onChange={handleChange} required />
                </label>
                <label>
                    <h3 className="edit-header" >Start Time:</h3>
                    <input name="time" value={newClass.time} onChange={handleChange} required />
                </label>
                <label>
                    <h3 className="edit-header" >Location:</h3>
                    <input name="location" value={newClass.location} onChange={handleChange} required />
                </label>
                <label>
                    <h3 className="edit-header" >Maximum Participants</h3>
                    <input type="number" name="max_size" value={newClass.max_size} onChange={handleChange} required min="5" max="30"/>
                </label>
                <label>
                    <h3 className="edit-header" >Intensity Level:</h3>
                    <select name="intensity" id="intensity" onChange={handleChange} required>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                        <option value="extreme">extreme</option>
                    </select>
                    {/* <input name="intensity_level" value={newClass.intensity_level} onChange={handleChange} required /> */}
                </label>
                <label>
                    <h3 className="edit-header" >Duration:</h3>
                    <select name="duration" id="duration" onChange={handleChange} required>
                        <option value="60">60</option>
                        <option value="45">45</option>
                        <option value="30">30</option>
                        <option value="15">15</option>
                    </select>
                    {/* <input name="duration" value={newClass.duration} onChange={handleChange} required /> */}
                </label><br /><br /><br />
                <button type="submit">Update Class</button>
            </form>
        </div>
    )
}