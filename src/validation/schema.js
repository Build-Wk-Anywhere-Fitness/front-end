// Here goes the schema for the form
import * as yup from 'yup';

export default yup.object().shape({
    username: yup
        .string()
        .required('username is required')
        .min(3, 'username must be at least 3 characters long'),
    password: yup
        .string()
        .required('password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    role: yup
        .string()
        .oneOf(['user', 'instructor'], 'role is required'),
})