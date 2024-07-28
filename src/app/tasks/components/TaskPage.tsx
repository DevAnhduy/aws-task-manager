'use client';

import { Container, Flex, LoadingOverlay, Stack, Title } from '@mantine/core';

import { useGetTasksQuery } from '../services/useGetTasksQuery';

export const TasksPage = () => {
	const { data: tasks, isLoading } = useGetTasksQuery();

	console.log('Tasks', tasks);

	if (isLoading) {
		return (
			<LoadingOverlay
				visible={isLoading}
				zIndex={1000}
				overlayProps={{ radius: 'sm', blur: 2 }}
			/>
		);
	}

	return (
		<Flex h="100%" bg="dark">
			<Container>
				<Title>Task List</Title>

				<Stack></Stack>
			</Container>
		</Flex>
	);
};
