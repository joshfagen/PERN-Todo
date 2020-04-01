import React, { Fragment, useState } from 'react';


const AddTask = () => {

    const [description, setDescription] = useState();
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:5000/tasks', {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(body)
            }); 
            console.log('logging response ')
            window.location = '/';
        
        } catch (err) {
            console.error(err.message);
        }
    }

    return ( 
        <Fragment>
            <h1 className="text-center mt-5">PERN Task List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    placeholder="What do you need to do?"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success p-3 ml-2">Add New Task</button>
            </form>
        </Fragment>
    )
};

export default AddTask;