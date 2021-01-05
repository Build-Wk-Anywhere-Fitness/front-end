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
        <div>

        </div>
    )
}
