import { NextApiRequest, NextApiResponse } from 'next';

import { Task } from '@/types';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Task[]>,
) {
	// ...

	console.log('Request', req.body);

	res.status(200).json([]);
}
