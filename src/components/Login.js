import React, {useState} from 'react';

const initialValues = {
    username: "",
    password: ""
};

export default function Login(props){
    const [account, setAccount] = useState(initialValues);

    // A custom hook set up to be able to modify values in state in a centralized location rather than
    // creating several slices of state and their own changeHandlers. Super usefule when compiling data on forms :)
    // It sets state to its current self, but then we select the key we want to modify with e.target.name. 
    // It is super important to be consistant with naming conventions here. See initialValues key names and how
    // they are the same as the 'name=""' fields in the form. This is how the function knows which key to update in state.
    const handleChange = e => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Will be importing a hook from actions/index.js to send the 'account' slice of state up and perform an axios
        // call to the endpoint to validate the credentials. If they're valid, we should get a token back and save it
        // to localStorage. This will be helpful in utils/axiosWithAuth.js!
    }

    return(
        <section className="login-form">
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
        </section>
    )
}