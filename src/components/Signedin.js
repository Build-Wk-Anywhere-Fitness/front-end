import React from 'react';
import { useHistory } from 'react-router';

export default function Signedin(){
    const { push } = useHistory();
    const goToInstructor =() => {
        setTimeout(() => {
            push('/instructor-page')
        }, 4000);
    }
    const goToHome =() => {
        setTimeout(() => {
            push('/reload')
        }, 4000);
    }

    return (
        <div>
            <h1>You have been successfully signed in!</h1>
            <h4>You will automatically be redirected in 5 seconds...</h4>
            {
                setTimeout(() => {
                    if(localStorage.getItem("role") === "instructor") {
                        goToInstructor();
                    } else {
                        goToHome();
                    }
                }, 1000)
            }
        </div>
    )
}