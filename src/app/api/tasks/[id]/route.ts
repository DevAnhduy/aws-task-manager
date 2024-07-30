import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';

import { verify } from '@utils/validation';

export async function GET(req: Request, context: any) {
	const { params } = context;

	const payload = await verify(req);

	if (!payload) {
		return NextResponse.json(null, { status: 401 });
	}

	const prisma = new PrismaClient();

	const task = await prisma.task.findFirst({
		where: { id: params.id, createdBy: payload.sub },
	});

	return NextResponse.json(task, { status: 200 });
}

export async function PUT(req: NextRequest, context: any) {
	const { params } = context;
	const { title, status, priority, due_date } = await req.json();

	const prisma = new PrismaClient();

	const payload = await verify(req);

	if (!payload) {
		return NextResponse.json(null, { status: 401 });
	}

	const task = await prisma.task.findFirst({
		where: { id: params.id as string, createdBy: payload.sub },
	});

	if (!task) {
		return NextResponse.json(task, { status: 404 });
	}

	await prisma.task.update({
		where: { id: params.id as string },
		data: {
			title: title || task.title,
			status: status || task.status,
			priority: priority || task.priority,
			dueDate: due_date || task.dueDate,
			createdBy: payload.sub,
		},
	});

	return NextResponse.json(task, { status: 200 });
}

export async function DELETE(req: Request, context: any) {
	const { params } = context;

	const prisma = new PrismaClient();

	const payload = await verify(req);
	if (!payload) {
		return NextResponse.json(null, { status: 401 });
	}

	const task = await prisma.task.findFirst({
		where: { id: params.id as string, createdBy: payload.sub },
	});

	if (!task) {
		return NextResponse.json(task, { status: 404 });
	}

	await prisma.task.delete({
		where: { id: params.id as string, createdBy: payload.sub },
	});

	return NextResponse.json(task, { status: 200 });
}
