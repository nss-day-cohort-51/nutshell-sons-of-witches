import React from "react"
import { useHistory } from "react-router"
import "./Task.css"

export const TaskCard = ({ task, handleDeleteTask}) => {
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));


    return (

        <div className="card">
            <div className="card-info"> 
                <h3>Task: {(task.name)}</h3>
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