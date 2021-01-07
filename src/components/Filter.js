import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { fetchCourses } from '../api/fetchCourses';


export default function Filter(props){
    const [filterType, setFilterType] = useState("");
    const [value, setValue] = useState("");
    const [courses, setCourses] = useState([]);

    const handleFilterChange = e => {
        setFilterType(e.target.value);
    }

    const handleValueChange = e => {
        setValue(e.target.value);
    }

    const handleFetch = () => {
        let payload = {[filterType]: value}
        axiosWithAuth()
            .post(`/classes/${filterType}`, payload)
            .then(res => {
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        axiosWithAuth()
            .delete(`/classes/${id}`)
            .then(res => {
                fetchCourses()
                    .then(res => {
                        setCourses(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleFetch();
    }

    return (
        <div>
            <h2>Filter Available Classes By Type</h2>
            <Link to="/classes">Return to Classes</Link>
            <form onSubmit={handleSubmit}>
                <select name="selector" id="selector" onChange={handleFilterChange}>
                    <option value="select">Select A filter</option>
                    <option value="time">Start Time</option>
                    <option value="date">Date (unavailable)</option>
                    <option value="duration">Duration</option>
                    <option value="intensity">Intensity Level</option>
                    <option value="location">Location</option>
                </select>
                <label>
                    <h5>Input search criteria:</h5>
                    <input type="text" name="input" maxLength="30" onChange={handleValueChange} required />
                </label>
                <button type="submit">Search</button>
            </form>
            {courses.map(item => {
                return <Course key={item.id} course={item} handleDelete={handleDelete} handleFetch={handleFetch} />
            })}
        </div>
    )
}