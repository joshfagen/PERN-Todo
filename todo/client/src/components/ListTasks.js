import React, { Fragment, useEffect, useState } from 'react';

const ListTasks = () => {
    const getTasks = async() => {
        try {
            const response = await fetch('http://localhost:5000/tasks');
            const jsonData = await response.json();
            console.log(jsonData);

        } catch (err) {
            console.log(err.message)
        }
    };

    useEffect(() => {
        getTasks();
    });

    return (
    
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </Fragment>    
    )
};

export default ListTasks;