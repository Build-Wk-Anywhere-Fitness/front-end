import React from 'react';
import { Link } from 'react-router-dom';

export default function ClassesDir(props) {
    return (
        <section className="signup-section">
            <h1>Create or Edit Classes</h1>
            <div>
                <Link className="signup-select-btn" to="/create-class" >Create New</Link>
                <Link className="signup-select-btn" to="/edit-class" >Edit Existing</Link>
            </div>
        </section>
    )
}