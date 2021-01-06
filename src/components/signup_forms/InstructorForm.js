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
        <form className='signup-instructor-section' onSubmit={onSubmit}>
            <div className="signup-select-btn">
                <h2>Sign Up!</h2>
            </div>
            <div className='main-instructor-section'>
                <h4>General information</h4>
                <div>
                    <div className="errors">
                        <div>{errors.username}</div>
                    </div>
                    <input
                        value={values.username}
                        name='username'
                        onChange={onChange}
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <div className="errors">
                        <div>{errors.password}</div>
                    </div>
                    <input
                        value={values.password}
                        name='password'
                        onChange={onChange}
                        type="password"
                        placeholder="Password"
                    />
                </div>
                {/* <div>
                    <div className="errors">
                        <div>{errors.email}</div>
                    </div>
                    <input
                        value={values.email}
                        name='email'
                        onChange={onChange}
                        type="email"
                        placeholder="Email"
                    />
                </div> */}
                <div>
                    <div className="errors">
                        <div>{errors.role}</div>
                    </div>
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
                    {/* <div>
                        <div className="errors">
                            <div>{errors.authCode}</div>
                        </div>
                        <input
                            value={values.authCode}
                            name='authCode'
                            onChange={onChange}
                            type="text"
                            placeholder="Auth Code"
                        />
                    </div> */}
                </div>
                <button disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}
