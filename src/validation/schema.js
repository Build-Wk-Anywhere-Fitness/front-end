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
    role: yup
    .string()
    .oneOf(['user', 'instructor'], 'role is required'),
    authCode: yup
    .string()
    .required('auth code is required'),
})