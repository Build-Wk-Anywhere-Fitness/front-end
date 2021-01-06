import React from 'react';

export default function Form(props){
    const { values, change, submit, errors, disabled } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-group inputs'>

                <div className='errors'>
                    {/* validation error*/}
                    <div>{errors.name}</div>
                    <div>{errors.intensity}</div>
                    <div>{errors.time}</div>
                    <div>{errors.duration}</div>
                    <div>{errors.location}</div>
                </div>

                <h4>Please fill out the following information to create a class</h4>
                <label>
                Instructor Name
                    <input name='name' 
                    value={values.name}
                    type='text'
                    onChange={onChange}
                    placeholder='please enter your name'
                    ></input>
                </label>
                <label>
                Start Time
                    <input name='time' 
                    value={values.time}
                    type='text'
                    onChange={onChange}
                    placeholder='please enter a start time'
                    ></input>
                </label>
                <label>
                Location
                    <input name='location' 
                    value={values.location}
                    type='text'
                    onChange={onChange}
                    placeholder='please enter a location'
                    ></input>
                </label>
             {/* dropdowns for duration */}
                <label>
                    Duration
                    <select
                     onChange={onChange}
                     value={values.duration}
                     name='size'
                      >
                    <option value=''>- Select an option -</option>
                    <option value='thirty'>30 mins</option>
                    <option value='sixty'>60 mins</option>
                    <option value='ninety'>90 mins</option>
                    </select>
                </label>
        


                {/* buttons for intensity */}
                <h3>Intensity</h3>
                <label>
                 Beginner
                    <input type='radio'
                    name='intensity'
                    value='beginner'
                    checked={values.intensity === 'beginner'}
                    onChange={onChange} />
                </label>        
                <label>
                 Intermediate
                    <input type='radio'
                    name='intensity'
                    value='intermediate'
                    checked={values.intensity === 'intermediate'}
                    onChange={onChange} />
                </label>
                <label>
                 Expert
                    <input type='radio'
                    name='intensity'
                    value='expert'
                    checked={values.intensity === 'expert'}
                    onChange={onChange} />
                </label>    


                {/* checkboxes for type of class */}
                <h3>Type</h3>
                <label>
                    Boxing
                    <input type='checkbox'
                    name='boxing'
                    checked={values.boxing}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Yoga
                    <input type='checkbox'
                    name='yoga'
                    checked={values.yoga}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Pilates
                    <input type='checkbox'
                    name='pilates'
                    checked={values.pilates}
                    onChange={onChange}
                    />
                </label>
                <label>
                    HIIT (High Intensity Interval Training)
                    <input type='checkbox'
                    name='hiit'
                    checked={values.hiit}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Crossfit
                    <input type='checkbox'
                    name='crossfit'
                    checked={values.crossfit}
                    onChange={onChange}
                    />
                </label>

                {/* special instuctions */}
                <h4>Anything else you'd like to add?</h4>
                <label>
                Special Instructions
                    <input name='specialIns' 
                    value={values.specialIns}
                    type='text'
                    onChange={onChange}
                    placeholder='any equipment required or tips for clients?'
                    ></input>
                </label>
                </div>


                <div className='submit'>
                    <button disabled={disabled} onSubmit={onSubmit}>Create Class</button>
                </div>
           
        </form>
    )


}