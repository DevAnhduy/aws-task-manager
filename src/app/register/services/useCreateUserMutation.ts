import { useMutation } from '@tanstack/react-query';
import { signUp } from 'aws-amplify/auth';

import { RegisterForm } from '../types';

export const useCreateUserMutation = () => {
	return useMutation({
		mutationFn: async (data: RegisterForm) => {
			const response = await signUp({
				username: data.email,
				password: data.password,
				options: {
					userAttributes: {
						email: data.email,
					},
				},
			});

			return response;
		},
	});
};
