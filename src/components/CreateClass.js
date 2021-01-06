import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

const initialClass = {
    name: "",
    type: "",
    start_time: "",
    duration: "60",
    intensity_level: "low",
    location: "",
    max_class_size: "10",
    attendee_count: 0
};

export default function CreateClass(props){
    const { toggle, setToggle } = props;
    const [newClass, setNewClass] = useState(initialClass);

    const handleChange = e => {
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newClass);
        axiosWithAuth()
            .post("/classes", newClass)
            .then(res => {
                console.log(res);
                alert("Class Created")
                setNewClass(initialClass);
                setToggle(!toggle);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return(
        <div>
            <h1>Create A Class</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>Class Name:</h3>
                    <input name="name" value={newClass.name} onChange={handleChange} required />
                </label>
                <label>
                    <h3>Class Type:</h3>
                    <input name="type" value={newClass.type} onChange={handleChange} required />
                </label>
                <label>
                    <h3>Start Time:</h3>
                    <input name="start_time" value={newClass.start_time} onChange={handleChange} required />
                </label>
                <label>
                    <h3>Duration:</h3>
                    <select name="duration" id="duration" onChange={handleChange} required>
                        <option value="60">60</option>
                        <option value="45">45</option>
                        <option value="30">30</option>
                        <option value="15">15</option>
                    </select>
                    {/* <input name="duration" value={newClass.duration} onChange={handleChange} required /> */}
                </label>
                <label>
                    <h3>Intensity Level:</h3>
                    <select name="intensity_level" id="intensity_level" onChange={handleChange} required>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                        <option value="extreme">extreme</option>
                    </select>
                    {/* <input name="intensity_level" value={newClass.intensity_level} onChange={handleChange} required /> */}
                </label>
                <label>
                    <h3>Location:</h3>
                    <input name="location" value={newClass.location} onChange={handleChange} required />
                </label>
                <label>
                    <h3>Maximum Participants</h3>
                    <input type="number" name="max_class_size" value={newClass.max_class_size} onChange={handleChange} required min="5" max="30"/>
                </label>
                <button type="submit">Create Class</button>
            </form>
        </div>
    )
}