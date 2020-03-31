const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a task
app.post("/tasks", async (req, res) => {
    try {
        const {
            description
        } = req.body;
        const newTask = await pool.query(
            "INSERT INTO tasks (description) VALUES($1)",
            [description]
        );

        res.json(newTask);
    } catch (err) {
        console.error(err.message);
    }
});
// get all tasks

// get single task

// update a task

// delete a task

app.listen(5000, () => {
    console.log('server currently running on port 5000!');
})