import { Task } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosClient } from '@utils/axios';

import { TaskForm } from '../types';

export const useCreateTaskMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: TaskForm) => {
			const response = await axiosClient.post<Task | null>('/tasks', data);

			return response;
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
	});
};
