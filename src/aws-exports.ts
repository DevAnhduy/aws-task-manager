import { Amplify, ResourcesConfig } from 'aws-amplify';

const config: ResourcesConfig = {
	Auth: {
		Cognito: {
			identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID || '',
			userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || '',
			userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || '',
			signUpVerificationMethod: 'code',
			loginWith: {
				username: true,
				email: false,
				phone: false,
			},
		},
	},
	API: {
		REST: {},
	},
};

Amplify.configure(config);
