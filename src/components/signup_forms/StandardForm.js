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
    <form className='signup-section' onSubmit={onSubmit}>
      <div className='signup-select-btn'>
        <h2>Sign Up!</h2>


        <div className='errors'>
          {/* validation errors */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='main-section'>
        <h4>General information</h4>

        {/* text inputs */}
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>

        <label>Password&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>

        <label>Role
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='user'>User</option>
            <option value='instructor'>Instructor</option>
          </select>
        </label>

        <button disabled={disabled}>submit</button>

      </div>
    </form>
  )
}
