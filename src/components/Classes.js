import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { fetchCourses } from '../api/fetchCourses';
import { Link } from 'react-router-dom';
import Course from './Course';

export default function Classes(){
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetchCourses()
            .then(res => {
                setClasses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const handleFetch = () => {
        fetchCourses()
            .then(res => {
                setClasses(res.data)
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
                        setClasses(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            });
    }

    return(
        <div className="classes-container">
            <h1>Avaiable Classes</h1>
            <Link to="/filter"><div className="create-class-btn filter-return-btn">Filter</div></Link>
            {classes.map(item => {
                return <Course key={item.id} course={item} handleDelete={handleDelete} handleFetch={handleFetch} />
            })}
        </div>
    )
}