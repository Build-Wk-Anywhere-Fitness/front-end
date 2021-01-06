import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { fetchCourses } from '../api/fetchCourses';
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
                console.log(res);
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
            {classes.map(item => {
                console.log(item)
                return <Course key={item.id} course={item} handleDelete={handleDelete} handleFetch={handleFetch} />
            })}
        </div>
    )
}