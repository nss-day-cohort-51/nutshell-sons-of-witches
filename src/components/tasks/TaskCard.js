import React from "react"
import { useHistory } from "react-router"
import { taskComplete } from "../modules/TaskManager";
import "./Task.css"

export const TaskCard = ({ task, reload, handleDeleteTask}) => {
    const history = useHistory();
    
    const handleCheckboxComplete = (event) => {
        taskComplete(task).then(reload)
    }

    

    return (

        <div className="task-card">
            <div className="card-info"> 
                <h3>Task: {(task.name)}</h3>
                <p>Completion Date: {task.date}</p>
                <input onChange={handleCheckboxComplete}type="checkbox" name="complete" id="complete"></input>
                <label for="complete">complete</label>
                <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                <button type="button"
                     onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                Edit
                </button>
            </div>
        </div>
    );
}