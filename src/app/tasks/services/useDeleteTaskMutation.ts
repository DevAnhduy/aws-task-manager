import { Task } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosClient } from '@utils/axios';

export const useDeleteTaskMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: string) => {
			const response = await axiosClient.delete<Task | null>(`/tasks/${id}`);

			return response;
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ['tasks'] });
		},
	});
};
