import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

import { Task } from '@/types';

export async function GET() {
	const prisma = new PrismaClient();

	const tasks = (await prisma.task.findMany()) as unknown as Task[];

	return NextResponse.json(tasks);
}

export async function POST(req: Request) {
	const prisma = new PrismaClient();

	const { title, status, priority, due_date } = await req.json();

	const task = await prisma.task.create({
		data: {
			title,
			status,
			priority,
			dueDate: due_date,
			createdBy: 'system',
		},
	});

	return NextResponse.json(task, { status: 201 });
}
