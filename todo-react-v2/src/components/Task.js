import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {
	const { removeTask, findItem } = useContext(TaskListContext);
	return (
		<div>
			<li className="list-item">
				<span>{task.title}</span>
				<div>
					<button
						onClick={() => removeTask(task.id)}
						className="btn-delete task-btn"
					>
						<i>delete</i>
					</button>
					<button
						onClick={() => findItem(task.id)}
						className="btn-delete task-btn"
					>
						<i>edit</i>
					</button>
				</div>
			</li>
		</div>
	);
};

export default Task;
