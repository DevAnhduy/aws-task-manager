import { useMutation } from '@tanstack/react-query';
import { signIn } from 'aws-amplify/auth';

import { LoginForm } from '../types';

export const useLogInMutation = () => {
	return useMutation({
		mutationFn: async (data: LoginForm) => {
			const response = await signIn({
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
