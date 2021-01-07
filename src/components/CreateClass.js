import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialClass = {
    name: "",
    type: "",
    date: "",
    time: "",
    duration: "60",
    intensity: "low",
    location: "",
    max_size: 10,
    attendee_count: 0
};

export default function CreateClass(props){
    const { toggle, setToggle } = props;
    const [newClass, setNewClass] = useState(initialClass);

    const handleChange = e => {
        if(e.target.name === "max_size"){
            let num = (Number(e.target.value));
            setNewClass({
                ...newClass,
                max_size: parseInt(num)
            })
            return
        }

        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/classes", newClass)
            .then(res => {
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
                    <h3>Date:</h3>
                    <input name="date" value={newClass.date} onChange={handleChange} required placeholder="mm/dd/yyyy" />
                </label>
                <label>
                    <h3>Start Time:</h3>
                    <input name="time" value={newClass.start_time} onChange={handleChange} required />
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
                    <select name="intensity" id="intensity" onChange={handleChange} required>
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
                    <input type="number" name="max_size" value={newClass.max_size} onChange={handleChange} required min={5} max={30}/>
                </label>
                <button type="submit">Create Class</button>
            </form>
        </div>
    )
}

// import React, { useState, useEffect } from 'react';
// import * as yup from 'yup';
// import classSchema from '../validation/classSchema'

// // blank forms
// const initialFormValues = {
//     name: '',
//     specialIns: '',
//     duration: '',
//     intensity: '',
//     boxing: false, 
//     yoga: false,
//     hiit: false,
//     pilates: false,
//     crossfit: false,
//   }
  
//   const initialFormErrors = {
//     name: '',
//     intensity: '',
//     time: '',
//     location: '',
//     duration: '',
//   }

//   const initialDisabled = true

// export default function CreateClass(props){ 
//     const { } = props;

//     // default states
//     const [ classes, setClasses ] = useState([]);
//     const [ formValues, setFormValues ] = useState(initialFormValues);
//     const [ disabled, setDisabled ] = useState(initialDisabled);
//     const [ formErrors, setFormErrors ] = useState(initialFormErrors);

//     // submitting the new class
//       const submitForm = (evt) => {
//         const newClass = {
//           name: formValues.name.trim(),
//           location: formValues.location.trim(),
//           time: formValues.time.trim(),
//           specialIns: formValues.specialIns.trim(),
//           duration: formValues.duration,
//           intensity: formValues.intensity,
//           boxing: formValues.boxing,
//           yoga: formValues.yoga,
//           hiit: formValues.hiit,
//           pilates: formValues.pilates,
//           crossfit: formValues.crossfit,
    
//         };
//           evt.preventDefault();
//           console.log(newClass);
//       };

//     // event handlers
//     const onChange = evt => {
//         const { name, value, type, checked } = evt.target
//         const valueToUse = type === 'checkbox' ? checked : value
//         yup
//         .reach(classSchema, name)
//         .validate(valueToUse)
//         .then(() => {
//           setFormErrors({
//             ...formErrors, [name]: ""
//           });
//         })
//         .catch(err => {
//           setFormErrors({
//             ...formErrors, [name]: err.errors[0]
//           });
//         });
  
//       setFormValues({
//         ...formValues,
//         [name]: value
//       })
//     }     
  
//     useEffect(() => {
//       classSchema.isValid(formValues).then(valid => {
//         setDisabled(!valid);
//       });
//     }, [formValues])


//     // simple create class form
//     return (
//       <form onSubmit={submitForm}>
//           <div className='form-group inputs'>

//               <div className='errors'>
//                   {/* validation errors */}
//                   <div>{formErrors.name}</div>
//                   <div>{formErrors.intensity}</div>
//                   <div>{formErrors.time}</div>
//                   <div>{formErrors.duration}</div>
//                   <div>{formErrors.location}</div>
//               </div>

//               <h4>Please fill out the following information to create a class</h4>
//               <label>
//               Name
//                   <input name='name' 
//                   value={formValues.name}
//                   type='text'
//                   onChange={onChange}
//                   placeholder='please enter your name'
//                   ></input>
//               </label>
//               <label>
//               Start Time
//                   <input name='time' 
//                   value={formValues.time}
//                   type='text'
//                   onChange={onChange}
//                   placeholder='please enter a start time'
//                   ></input>
//               </label>
//               <label>
//               Location
//                   <input name='location' 
//                   value={formValues.location}
//                   type='text'
//                   onChange={onChange}
//                   placeholder='please enter a location'
//                   ></input>
//               </label>
//            {/* dropdowns for duration */}
//               <label>
//                   Duration
//                   <select
//                    onChange={onChange}
//                    value={formValues.duration}
//                    name='size'
//                     >
//                   <option value=''>- Select an option -</option>
//                   <option value='thirty'>30 mins</option>
//                   <option value='sixty'>60 mins</option>
//                   <option value='ninety'>90 mins</option>
//                   </select>
//               </label>
      


//               {/* buttons for intensity */}
//               <h3>Intensity</h3>
//               <label>
//                Beginner
//                   <input type='radio'
//                   name='intensity'
//                   value='beginner'
//                   checked={formValues.intensity === 'beginner'}
//                   onChange={onChange} />
//               </label>        
//               <label>
//                Intermediate
//                   <input type='radio'
//                   name='intensity'
//                   value='intermediate'
//                   checked={formValues.intensity === 'intermediate'}
//                   onChange={onChange} />
//               </label>
//               <label>
//                Expert
//                   <input type='radio'
//                   name='intensity'
//                   value='expert'
//                   checked={formValues.intensity === 'expert'}
//                   onChange={onChange} />
//               </label>    


//               {/* checkboxes for type of class */}
//               <h3>Type</h3>
//               <label>
//                   Boxing
//                   <input type='checkbox'
//                   name='boxing'
//                   checked={formValues.boxing}
//                   onChange={onChange}
//                   />
//               </label>
//               <label>
//                   Yoga
//                   <input type='checkbox'
//                   name='yoga'
//                   checked={formValues.yoga}
//                   onChange={onChange}
//                   />
//               </label>
//               <label>
//                   Pilates
//                   <input type='checkbox'
//                   name='pilates'
//                   checked={formValues.pilates}
//                   onChange={onChange}
//                   />
//               </label>
//               <label>
//                   HIIT (High Intensity Interval Training)
//                   <input type='checkbox'
//                   name='hiit'
//                   checked={formValues.hiit}
//                   onChange={onChange}
//                   />
//               </label>
//               <label>
//                   Crossfit
//                   <input type='checkbox'
//                   name='crossfit'
//                   checked={formValues.crossfit}
//                   onChange={onChange}
//                   />
//               </label>

//               {/* special instuctions */}
//               <h4>Anything else you'd like to add?</h4>
//               <label>
//               Special Instructions
//                   <input name='specialIns' 
//                   value={formValues.specialIns}
//                   type='text'
//                   onChange={onChange}
//                   placeholder='any equipment required?'
//                   ></input>
//               </label>
//               </div>


//               <div className='submit'>
//                   <button disabled={disabled} onSubmit={submitForm}>Create Class</button>
//               </div>
         
//       </form>
//   );
// };