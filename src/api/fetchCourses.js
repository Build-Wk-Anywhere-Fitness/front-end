import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const fetchCourses = () => {
    return axiosWithAuth()
    .get('/classes')
    .then(res => {
        return(res)
    })
    .catch(err => {
        console.log(err)
    });
}