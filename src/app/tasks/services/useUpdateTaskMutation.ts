import { Task } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosClient } from '@utils/axios';

import { TaskForm } from '../types';

export const useUpdateTaskMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }: { id: string; data: TaskForm }) => {
			const response = await axiosClient.put<Task | null>(`/tasks/${id}`, data);

			return response;
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
	});
};
