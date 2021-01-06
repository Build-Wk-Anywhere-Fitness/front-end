import React from 'react'

export default function User(props){
    const { details } = props;

    if(!details){
        return <h3>working on fetching the class details</h3>
    }

    return ( 
        <div className='container'>
            <h2>Name: {details.name}</h2>
            <h4>Special Instructions: {details.specialIns || 'n/a'}</h4>
            <p>Location: {details.location}</p>
            <p>Duration: {details.duration}</p>
            <p>Intensity: {details.intensity}</p>
            <p>Type of Workout: {details.boxing === true ? 'boxing' : ''}
             {details.pilates === true ? ' pilates' : ''} 
             {details.yoga === true ? ' yoga' : ''}
             {details.hiit === true ? ' hiit' : ''}
             {details.crossfit === true ? ' crossfit' : ''}</p>
        </div>
    )
}