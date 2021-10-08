import React, { useState} from "react";
import { useHistory } from "react-router";
import {  addTask } from '../modules/TaskManager'

export const TaskForm = () => {
    const [task, setTask] = useState({
        name: "",
        date: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newTask = { ...task }
        const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
        let selectedVal = event.target.value
        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newTask[event.target.id] = selectedVal
        newTask.userId = currentUser
        setTask(newTask)
    }

    const handleClickSaveTask = (event) => {
		event.preventDefault()
            addTask(task)
                .then(() => history.push("/tasks"))
    }
     
    return (
		<form className="taskForm">
			<h2 className="taskForm__title">New Task</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Task Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task Name" value={task.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="date">Task Date:</label>
					<input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task Date" value={task.date} />
				</div>
			</fieldset>
			<button className="btn btn-primary" onClick={handleClickSaveTask}>Save Task
          </button>
		</form>
	)
};