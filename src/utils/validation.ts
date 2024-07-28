import { ReactNode } from 'react';

import { matches } from '@mantine/form';

export const isPassword = (error?: ReactNode) => {
	return matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
		error,
	);
};
