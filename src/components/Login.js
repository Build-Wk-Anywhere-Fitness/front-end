import React, {useState} from 'react';

const initialValues = {
    username: "",
    password: ""
};

export default function Login(props){
    const [account, setAccount] = useState(initialValues);

    const handleChange = e => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // submit the component state to global state in order to run an axios call to account endpoint
    }

    return(
        <section className="login-form">
            <form>
                <label>
                    Username: 
                    <input 
                    type="text"
                    name="username"
                    value={account.username}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input 
                    type="password"
                    name="password"
                    value={account.password}
                    onChange={handleChange}
                    />
                </label>
            </form>
        </section>
    )
}