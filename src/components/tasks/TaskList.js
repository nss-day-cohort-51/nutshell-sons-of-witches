import React, { useState, useEffect } from "react";
import { getAllTasks, deleteTask } from "../modules/TaskManager";
import { TaskCard } from "./TaskCard";
import { useHistory } from "react-router";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const history = useHistory();
    const getTasks = () => {
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI);
        });
    };

    const reload = () => {
        getTasks()
    }


    const handleDeleteTask = (id) => {
        console.log(id)
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    };
    
    const incompleteTasks = tasks.filter(t => t.status === false)
    console.log(incompleteTasks)
    useEffect(() => {
        getTasks();
    }, []);

    return (
		<>
		<section className="section-content">
			<button type="button"
				className="btn"
				onClick={() => {history.push("/tasks/create")}}>
				Add Task
			</button>
		</section>
		<div className="container-cards">
			{incompleteTasks.map(task =>
				<TaskCard reload={reload} key={task.id} task={task} handleDeleteTask={handleDeleteTask} />)}
		</div>
		</>
	);
};