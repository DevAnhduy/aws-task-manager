export type Task = {
	id: string;
	title: string;
	due_date: string;
	status: 'pending' | 'done';
	priority: 'low' | 'medium' | 'high';
};

export type User = {
	username: string;
};
