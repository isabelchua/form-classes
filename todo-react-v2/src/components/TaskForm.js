import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
	const { addTask, clearList, editItem, editTask } = useContext(
		TaskListContext
	);

	const [title, setTitle] = useState('');

	const handleChange = e => {
		setTitle(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (editItem === null) {
			addTask(title);
			setTitle('');
		} else {
			editTask(title, editItem.id);
		}
	};

	useEffect(() => {
		if (editItem !== null) {
			setTitle(editItem.title);
			console.log(editItem);
		} else {
			setTitle('');
		}
	}, [editItem]);

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				onChange={handleChange}
				value={title}
				type="text"
				className="task-input"
				placehoder="Add Task.."
				required
			/>
			<div className="buttons">
				<button type="submit" className="btn">
					{/* if edit item is true */}
					{editItem ? 'Edit Task' : 'Add Task'}
				</button>
				<button onClick={clearList} className="clear">
					Clear
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
