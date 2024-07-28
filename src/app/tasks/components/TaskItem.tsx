// import React from 'react';

// const TaskItem = ({ task, onTaskUpdate, onTaskDelete }) => {
// 	return (
// 		<div className={`task-item ${task.priority.toLowerCase()}`}>
// 			<h2>{task.text}</h2>
// 			<p>Due: {task.dueDate}</p>
// 			<p>Priority: {task.priority}</p>
// 			<p>Status: {task.status}</p>
// 			<button
// 				onClick={() =>
// 					onTaskUpdate({
// 						...task,
// 						status: task.status === 'Pending' ? 'Completed' : 'Pending',
// 					})
// 				}
// 			>
// 				{task.status === 'Pending' ? 'Mark as Complete' : 'Mark as Pending'}
// 			</button>
// 			<button onClick={() => onTaskDelete(task.id)}>Delete</button>
// 		</div>
// 	);
// };

// export default TaskItem;
