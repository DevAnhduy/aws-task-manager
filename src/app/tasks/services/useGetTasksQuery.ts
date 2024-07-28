import { useQuery } from '@tanstack/react-query';
import { get } from 'aws-amplify/api';

export const useGetTasksQuery = () => {
	return useQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			console.log('Query fn');

			const request = get({ apiName: 'Task Manager', path: '/tasks' });

			console.log('Request', request);

			const { body } = await request.response;
			const response = await body.json();

			console.log('Response', response);

			return response;
		},
	});
};
