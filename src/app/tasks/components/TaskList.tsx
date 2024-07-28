// import React from 'react';

// import TaskItem from './TaskItem';

// const TaskList = ({ tasks, filter, onTaskUpdate, onTaskDelete }) => {
// 	const filteredTasks = tasks.filter((task) => {
// 		if (filter === 'All Tasks') return true;
// 		return filter === 'Completed'
// 			? task.status === 'Completed'
// 			: task.status === 'Pending';
// 	});

// 	return (
// 		<div className="task-list">
// 			{filteredTasks.map((task) => (
// 				<TaskItem
// 					key={task.id}
// 					task={task}
// 					onTaskUpdate={onTaskUpdate}
// 					onTaskDelete={onTaskDelete}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// export default TaskList;
