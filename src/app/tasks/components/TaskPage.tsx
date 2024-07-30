'use client';

import Link from 'next/link';

import { useState } from 'react';

import {
	Badge,
	Button,
	Container,
	Flex,
	Group,
	LoadingOverlay,
	Pagination,
	Stack,
	Table,
	Text,
	Title,
} from '@mantine/core';
import { modals } from '@mantine/modals';

import { TaskPriority, TaskStatus } from '@prisma/client';
import dayjs from 'dayjs';

import { useGetTasksQuery } from '../services/useGetTasksQuery';

import { TaskActions } from './TaskActions';
import { TaskFormModal } from './TaskFormModal';

const MAX_ROW = 15;

export const TasksPage = () => {
	const { data: tasks, isLoading } = useGetTasksQuery();

	const [currentPage, setCurrentPage] = useState(1);

	if (isLoading) {
		return (
			<LoadingOverlay
				visible={isLoading}
				zIndex={1000}
				overlayProps={{ radius: 'sm', blur: 2 }}
			/>
		);
	}

	const getStatusTag = (status: TaskStatus) => {
		switch (status) {
			case 'PENDING':
				return <Badge bg="blue">{status}</Badge>;
			case 'DONE':
				return <Badge bg="green">{status}</Badge>;
			default:
				return <></>;
		}
	};

	const getPriorityTag = (priority: TaskPriority) => {
		switch (priority) {
			case 'LOW':
				return <Badge bg="blue">{priority}</Badge>;
			case 'MEDIUM':
				return <Badge bg="yellow">{priority}</Badge>;
			case 'HIGH':
				return <Badge bg="red">{priority}</Badge>;
			default:
				return <></>;
		}
	};

	const onCreate = () => {
		return modals.open({
			title: 'Create new task',
			children: <TaskFormModal />,
		});
	};

	return (
		<Flex h="100%" bg="dark" pt={20}>
			<Container w="100%">
				<Stack>
					<Title>Task List</Title>

					<Button w="fit-content" ml="auto" bg="blue" onClick={onCreate}>
						+ Add Task
					</Button>

					<Table border={1} withTableBorder withColumnBorders>
						<Table.Thead>
							<Table.Tr fw="bold">
								<Table.Td align="center" w={10}>
									Index
								</Table.Td>
								<Table.Td w={200}>Title</Table.Td>
								<Table.Td align="center">File</Table.Td>
								<Table.Td align="center">Status</Table.Td>
								<Table.Td align="center">Priority</Table.Td>
								<Table.Td align="center">Due Date</Table.Td>
								<Table.Td align="center">Actions</Table.Td>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							{!tasks?.length && (
								<Table.Tr>
									<Table.Td ta="center" py={20} colSpan={5}>
										<Text fw="bold">
											You dont have any task. Please add one
										</Text>
									</Table.Td>
								</Table.Tr>
							)}

							{(tasks || [])
								.slice((currentPage - 1) * MAX_ROW, currentPage * MAX_ROW)
								.map((task, idx) => (
									<Table.Tr key={task.id}>
										<Table.Td align="center">
											{(currentPage - 1) * MAX_ROW + idx + 1}
										</Table.Td>
										<Table.Td
											maw={150}
											style={{
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												whiteSpace: 'nowrap',
											}}
										>
											{task.title}
										</Table.Td>
										<Table.Td
											align="center"
											maw={200}
											style={{
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												whiteSpace: 'nowrap',
											}}
										>
											{task.file ? (
												<Link target="_blank" href={task.file}>
													<Text fw={700} c="blue">
														View
													</Text>
												</Link>
											) : (
												'-'
											)}
										</Table.Td>
										<Table.Td align="center">
											{getStatusTag(task.status)}
										</Table.Td>
										<Table.Td align="center">
											{getPriorityTag(task.priority)}
										</Table.Td>

										<Table.Td align="center">
											{dayjs(task.dueDate)
												.format('YYYY/MM/DD HH:mm:ss')
												.toString()}
										</Table.Td>
										<Table.Td align="center">
											<TaskActions data={task} />
										</Table.Td>
									</Table.Tr>
								))}
						</Table.Tbody>
					</Table>

					<Group justify="end">
						<Pagination
							value={currentPage}
							onChange={(v) => setCurrentPage(v)}
							total={Math.ceil((tasks?.length || 0) / MAX_ROW)}
						/>
					</Group>
				</Stack>
			</Container>
		</Flex>
	);
};
