import React from "react"
import { useHistory } from "react-router"

export const TaskCard = ({ task, handleDeleteTask}) => {
    const history = useHistory();

    return (

        <div className="task-card">
            <div className="card-info"> 
                <h3>Task: {(task.name)}</h3>
                <p>Expected Task Completion Date: {task.date}</p>
                <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                <button type="button"
                     onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                Edit
                </button>
            </div>
        </div>
    );
}