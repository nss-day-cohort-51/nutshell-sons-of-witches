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

    const handleDeleteTask = id => {
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    };

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
			{tasks.map(task =>
				<TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} />)}
		</div>
		</>
	);
};