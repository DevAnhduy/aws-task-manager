import { ReactNode } from 'react';

import { matches } from '@mantine/form';

import jwt from 'jsonwebtoken';

interface JWTResponse {
	sub: string;
	email: string;
	email_verified: boolean;
	iss: string;
	origin_jti: string;
	aud: string;
	event_id: string;
	token_use: string;
	auth_time: number;
	exp: number;
	jti: string;
}

export const isPassword = (error?: ReactNode) => {
	return matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
		error,
	);
};

export const verify = async (req: Request) => {
	try {
		let token = req.headers.get('Authorization');

		if (!token) {
			return null;
		}

		token = token.replace('Bearer ', '');

		const detail = jwt.decode(token);

		// const pem = jwkToPem(JSON.parse(process.env.NEXT_PUBLIC_JWK as string));

		// const auth = jwt.verify(token, pem, {
		// 	algorithms: ['RS256'],
		// }) as JWTResponse;

		return detail as JWTResponse;
	} catch (error: any) {
		console.error('Error verifying token:', error);
		return null;
	}
};
