import React from "react"
import { useHistory } from "react-router"
import { taskComplete } from "../modules/TaskManager";
import "./Task.css"

export const TaskCard = ({ task, reload, handleDeleteTask}) => {
    const history = useHistory();
    
    const handleCheckboxComplete = (event) => {
        taskComplete(task).then(reload)
    }

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    return (

        <div className="card">
            <div className="card-info"> 
                <h3>Task: {(task.name)}</h3>
                <p>Completion Date: {task.date}</p>
                {task.userId === currentUser && <div>
                <input onChange={handleCheckboxComplete}type="checkbox" name="complete" id="complete"></input>
                <label for="complete">complete</label> </div> }
                <button type="button"></button>
                <p>Expected Completion Date: {task.date}</p>
                {task.userId === currentUser && <div className="buttons">
                <button className="button-7" type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                <button className="button-7" type="button"
                     onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                Edit
                </button>
                </div>}
                
            </div> 
        </div>
    );
}