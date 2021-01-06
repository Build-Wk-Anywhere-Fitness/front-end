// Here goes the schema for the form
import * as yup from 'yup';

export default yup.object().shape({
    username: yup
        .string()
        .required('username is required')
        .min(3, 'username must be at least 3 chars'),
    password: yup
        .string()
        .required("Password is Required")
        .min(6, "Passwords must be at least 6 characters long."),
    // email: yup
    //     .string()
    //     .email()
    //     .required('please enter a valid email address'),
    role: yup
        .string()
        .oneOf(['user', 'instructor'], 'role is required'),
    // authCode: yup
    //     .string()
    //     .required('auth code is required')
})