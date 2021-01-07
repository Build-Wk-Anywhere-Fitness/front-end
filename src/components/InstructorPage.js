import React, { useState} from 'react';
import CreateClass from './CreateClass';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

// This is a protected page. If this page renders without being logged in, there is a problem.

function InstructorPage(props){
    const [toggleCreate, setToggleCreate] = useState(false);

    const setCreate = () => {
        setToggleCreate(!toggleCreate)
    }

    return(
        <div>
            Instructor Page
            <div className="create-class-container">
                <button onClick={setCreate}>{(toggleCreate) ? "Cancel" : "Create Class"}</button>
                {(toggleCreate) ? <CreateClass toggle={toggleCreate} setToggle={setToggleCreate}/> : ""}
            </div>
        </div>
    )
}

export default InstructorPage;