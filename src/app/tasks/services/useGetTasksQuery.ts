import { Task } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@utils/axios';

export const useGetTasksQuery = () => {
	return useQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			const response = await axiosClient.get<Task[]>('/tasks');

			return response.data;
		},
	});
};
