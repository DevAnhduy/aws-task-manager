// import React, { useState } from 'react';

// const TaskForm = ({ onTaskCreate }) => {
// 	const [taskText, setTaskText] = useState('');
// 	const [dueDate, setDueDate] = useState('');
// 	const [priority, setPriority] = useState('Low');

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		onTaskCreate({ text: taskText, dueDate, priority });
// 		setTaskText('');
// 		setDueDate('');
// 		setPriority('Low');
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input
// 				type="text"
// 				value={taskText}
// 				onChange={(e) => setTaskText(e.target.value)}
// 				placeholder="New Task"
// 				required
// 			/>
// 			<input
// 				type="date"
// 				value={dueDate}
// 				onChange={(e) => setDueDate(e.target.value)}
// 				required
// 			/>
// 			<select value={priority} onChange={(e) => setPriority(e.target.value)}>
// 				<option value="Low">Low</option>
// 				<option value="Medium">Medium</option>
// 				<option value="High">High</option>
// 			</select>
// 			<button type="submit">Add Task</button>
// 		</form>
// 	);
// };

// export default TaskForm;
