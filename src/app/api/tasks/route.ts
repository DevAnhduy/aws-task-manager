import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

import { verify } from '@utils/validation';

import '@/aws-exports';

export async function GET(req: Request) {
	const prisma = new PrismaClient();

	const payload = await verify(req);

	if (!payload) {
		return NextResponse.json(null, { status: 401 });
	}

	const tasks = await prisma.task.findMany({
		where: { createdBy: payload.sub },
		orderBy: [
			{
				dueDate: 'desc',
			},
		],
	});
	return NextResponse.json(tasks);
}

export async function POST(req: Request) {
	const prisma = new PrismaClient();

	const { title, status, priority, dueDate } = await req.json();

	const payload = await verify(req);

	if (!payload) {
		return NextResponse.json(null, { status: 401 });
	}

	const task = await prisma.task.create({
		data: {
			title,
			status,
			priority,
			dueDate,
			createdBy: payload.sub,
		},
	});

	return NextResponse.json(task, { status: 201 });
}
