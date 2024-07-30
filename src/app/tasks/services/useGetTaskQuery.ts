import { Task } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@utils/axios';

export const useGetTaskQuery = (id?: string) => {
	return useQuery({
		queryKey: ['tasks', id],
		enabled: !!id,
		queryFn: async () => {
			const response = await axiosClient.get<Task>(`/tasks/${id}`);

			return response.data;
		},
	});
};
