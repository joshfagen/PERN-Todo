import React, { Fragment, useState } from 'react';



const EditTask = (task) => {
    const [description, setDescription] = useState(task.task.description);  

    const updateDescription = async(id) => {
        

        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = '/';            
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <Fragment>
            <button 
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${task.task.tasks_id}`}
            >
                Edit
            </button>

            <div 
                id={`id${task.task.tasks_id}`}
                class="modal"
                onClick= { () => setDescription(task.task.description)}
            >
                <div class="modal-dialog">
                <div class="modal-content" >
                <div class="modal-header" >
                    <h4 class="modal-title">Edit Task</h4> 
                    <button 
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        onClick= { () => setDescription(task.task.description)}
                    >
                            &times; 
                    </button> 
                    </div> 
                <div class="modal-body">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={`${description}`}
                        onChange={e => setDescription(e.target.value)}
                    /> 
                </div> 
                <div class = "modal-footer">
                    <button 
                        type="button" 
                        class="btn btn-warning"
                        onClick={ () => updateDescription(task.task.tasks_id)}
                    >
                        Edit    
                    </button> 
                    <button 
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                        onClick= { () => setDescription(task.task.description)}
                    >
                        Close    
                    </button> 
                </div> 
                </div>
                </div> 
            </div>
        </Fragment>
        )
};

export default EditTask;