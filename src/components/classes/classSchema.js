// Here goes the schema for the class form
import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('name is required'),
    intensity: yup
    .string()
    .required('please select a workout intensity')
    .min(6, 'passwords must be at least 6 characters long'),
    location: yup
    .string()
    .required('please enter a location'),
    time: yup
    .string()
    .required('please enter a time for your workout'),
    duration: yup
    .string()
    .oneOf(['thirty', 'sixty', 'ninety'], 'please choose a workout duration'),

})