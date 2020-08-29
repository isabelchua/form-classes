import React, { createContext, useState } from 'react';
import { nanoid } from 'nanoid';

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
	const [tasks, setTasks] = useState([
		{ title: 'Study now', id: 1 },
		{ title: 'Study', id: 2 },
		{ title: 'Study', id: 3 }
	]);

	const [editItem, setEditItem] = useState(null);

	const addTask = title => {
		setTasks([...tasks, { title: title, id: nanoid(10) }]);
	};

	const removeTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	const clearList = () => {
		setTasks([]);
	};

	const findItem = id => {
		const item = tasks.find(task => task.id === id);

		setEditItem(item);
	};

	const editTask = (title, id) => {
		const newTasks = tasks.map(task =>
			task.id === id ? { title, id } : task
		);

		setTasks(newTasks);
		//clear fields after edit item
		setEditItem(null);
	};

	return (
		<TaskListContext.Provider
			value={{
				tasks,
				addTask,
				removeTask,
				clearList,
				findItem,
				editTask,
				editItem
			}}
		>
			{props.children}
		</TaskListContext.Provider>
	);
};

export default TaskListContextProvider;
