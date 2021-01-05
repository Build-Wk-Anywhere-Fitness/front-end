// Create a form for users that wish to sign up as an instructor, should take in an additional value to flag the account as an instructor account
import React from 'react'

export default function InstructorForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }
    return (
        <form className='signup-section' onSubmit={onSubmit}>
            <div className="signup-select-btn">
                <h2>Sign Up!</h2>
                <div className='errors'>
                    {/* validation errors */}
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                </div>
            </div>
            <div className='main-section'>
                <h4>General information</h4>
                <label>
                    Username
                     <input
                        value={values.username}
                        name='username'
                        onChange={onChange}
                        type="text"
                        placeholder="Username"
                    />
                </label>
                <label>
                    Password
                     <input
                        value={values.password}
                        name='password'
                        onChange={onChange}
                        type="password"
                        placeholder="Password"
                    />
                </label>
                <label>
                    Email
                     <input
                        value={values.email}
                        name='email'
                        onChange={onChange}
                        type="email"
                        placeholder="Email"
                    />
                </label>
                <label>
                    Role
                     <select
                        value={values.role}
                        name='role'
                        onChange={onChange}
                    >
                        <option value="">- Select an option -</option>
                        <option value="user">User</option>
                        <option value="instructor">Instructor</option>
                    </select>
                </label>
                <button disabled={disabled}>submit</button>
            </div>
        </form>
    )
}
