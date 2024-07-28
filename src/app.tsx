// import React, { useEffect, useState } from 'react';

// import { get, post, put } from 'aws-amplify/api';

// import TaskForm from './components/TaskForm';
// import TaskItem from './components/TaskItem';
// import { Task } from './types';

// const App = () => {
// 	const [tasks] = useState<Task[]>([]);
// 	const [filter, setFilter] = useState('All Tasks');

// 	const fetchTasks = async () => {
// 		try {
// 			const fetchData = get({
// 				apiName: 'TaskManagerAPI',
// 				path: '/tasks',
// 			});

// 			const { body } = await fetchData.response;
// 			const response = await body.json();

// 			console.log('Response', response);

// 			// setTasks(response);
// 		} catch (error) {
// 			console.error('Error fetching tasks:', error);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchTasks();
// 	}, []);

// 	const handleFilterChange = (event) => {
// 		setFilter(event.target.value);
// 	};

// 	const handleTaskUpdate = async (task: Task) => {
// 		try {
// 			const updateTask = put({
// 				apiName: 'TaskManagerAPI',
// 				path: `/tasks/${task.id}`,
// 				options: {
// 					body: task,
// 				},
// 			});

// 			const { body } = await updateTask.response;
// 			const response = await body.json();

// 			console.log('Response', response);

// 			// setTasks(
// 			// 	tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
// 			// );
// 		} catch (error) {
// 			console.error('Error updating task:', error);
// 		}
// 	};

// 	const handleTaskCreate = async (task: Task) => {
// 		try {
// 			const createTask = post({
// 				apiName: 'TaskManagerAPI',
// 				path: '/tasks',
// 				options: {
// 					body: task,
// 				},
// 			});

// 			const { body } = await createTask.response;
// 			const response = await body.json();

// 			console.log('response');

// 			// setTasks([...tasks, createdTask]);
// 		} catch (error) {
// 			console.error('Error creating task:', error);
// 		}
// 	};

// 	const handleTaskDelete = async (taskId) => {
// 		try {
// 			const deleteTask = put({
// 				apiName: 'TaskManagerAPI',
// 				path: `/tasks/${taskId}`,
// 			});

// 			// setTasks(tasks.filter((task) => task.id !== taskId));
// 		} catch (error) {
// 			console.error('Error deleting task:', error);
// 		}
// 	};

// 	const filteredTasks = tasks.filter((task) => {
// 		if (filter === 'All Tasks') return true;
// 		// return filter === 'Completed'
// 		// 	? task.status === 'Completed'
// 		// 	: task.status === 'Pending';
// 	});

// 	return (
// 		<div>
// 			<h1>My Tasks</h1>
// 			<TaskForm onTaskCreate={handleTaskCreate} />
// 			<select value={filter} onChange={handleFilterChange}>
// 				<option value="All Tasks">All Tasks</option>
// 				<option value="Completed">Completed</option>
// 				<option value="Pending">Pending</option>
// 			</select>
// 			<div className="task-list">
// 				{filteredTasks.map((task) => (
// 					<TaskItem
// 						key={task.id}
// 						task={task}
// 						onTaskUpdate={handleTaskUpdate}
// 						onTaskDelete={handleTaskDelete}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default App;
