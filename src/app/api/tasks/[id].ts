import { NextApiRequest, NextApiResponse } from 'next';

import { Task } from '@/types';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Task | null>,
) {
	// ...

	const { id } = req.query;

	console.log('Request', id);

	res.status(200).json(null);
}
