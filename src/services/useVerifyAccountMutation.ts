import { useMutation } from '@tanstack/react-query';
import { confirmSignUp } from 'aws-amplify/auth';

export const useVerifyAccountMutation = () => {
	return useMutation({
		mutationFn: async ({
			username,
			code,
		}: {
			username: string;
			code: string;
		}) => {
			const response = await confirmSignUp({
				username,
				confirmationCode: code,
			});

			return response;
		},
	});
};
