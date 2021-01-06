// Create a form for users that wish to sign up as a standard user



import React from 'react'

export default function StandardForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

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
        <h4>General Information</h4>
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
        <div>
          <div className="errors">
            <div>{errors.confirmPassword}</div>
          </div>
          <input
            value={values.confirmPassword}
            name='confirmPassword'
            onChange={onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
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
        </div>
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  )
}
