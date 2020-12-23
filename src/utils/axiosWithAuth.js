import axios from 'axios';

/*
    This helper function will be called each time we want to make an axios call for actual data from our Endpoints.
    Before we make our axios calls, we're going to grab our token from localStorage and attach that to the HTML header
    That we send to our server. This is how we Authenticate ourselves on the server to ensure that we are logged in.

    Whether a user is a normal member or an instructor will trigger an additional param which will decide our
    Authorization level. It's how we will control what data the user sees and what features are available to them
*/

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            Authorization: token
        }
    });
};