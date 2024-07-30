import { useEffect } from 'react';

import { Button, Group, Select, Stack, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { TaskPriority, TaskStatus } from '@prisma/client';

import { useCreateTaskMutation } from '../services/useCreateTaskMutation';
import { useGetTaskQuery } from '../services/useGetTaskQuery';
import { useUpdateTaskMutation } from '../services/useUpdateTaskMutation';
import { TaskForm } from '../types';

type TaskFormModalProps = {
	id?: string;
};

export const TaskFormModal = ({ id }: TaskFormModalProps) => {
	const { data: taskDetail } = useGetTaskQuery(id);

	const form = useForm<TaskForm>({
		initialValues: {
			title: '',
			status: 'PENDING',
			priority: 'LOW',
			dueDate: new Date(),
		},
		validate: {
			title: isNotEmpty('Please enter title'),
			status: isNotEmpty('Please choose status'),
			priority: isNotEmpty('Please choose priority'),
			dueDate: isNotEmpty('Please choose due date'),
		},
	});

	const { mutateAsync: createTask, isPending: isCreating } =
		useCreateTaskMutation();
	const { mutateAsync: updateTask, isPending: isUpdating } =
		useUpdateTaskMutation();

	const handleSubmit = async (values: TaskForm) => {
		try {
			const response = taskDetail
				? await updateTask({ id: taskDetail.id, data: values })
				: await createTask(values);

			if (response.status === 201 || response.status === 200) {
				modals.closeAll();

				return notifications.show({
					color: 'green',
					message: 'Create task success',
					style: {
						fontWeight: 'bold',
					},
				});
			}

			notifications.show({
				color: 'red',
				message: 'Create task fail',
				style: {
					fontWeight: 'bold',
				},
			});
		} catch (err) {
			notifications.show({
				color: 'red',
				title: 'Create task fail',
				message: err?.toString(),
				style: {
					fontWeight: 'bold',
				},
			});
		}
	};

	useEffect(() => {
		if (taskDetail) {
			form.setValues({
				title: taskDetail.title,
				status: taskDetail.status,
				priority: taskDetail.priority,
				dueDate: new Date(),
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [taskDetail]);

	const isLoading = isCreating || isUpdating;

	return (
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack>
				<TextInput
					label="Title"
					placeholder="Task title"
					key={form.key('title')}
					{...form.getInputProps('title')}
				/>
				<Select
					label="Status"
					placeholder="Please choose value"
					data={Object.values(TaskStatus)}
					defaultValue="PENDING"
					key={form.key('status')}
					{...form.getInputProps('status')}
				/>
				<Select
					label="Priority"
					placeholder="Please choose priority"
					defaultValue="LOW"
					data={Object.values(TaskPriority)}
					key={form.key('priority')}
					{...form.getInputProps('priority')}
				/>
				<DateInput
					label="Date input"
					valueFormat="YYYY/MM/DD HH:mm:ss"
					defaultValue={new Date()}
					key={form.key('dueDate')}
					placeholder="Please choose due date"
					{...form.getInputProps('dueDate')}
				/>

				<Group justify="end">
					<Button
						variant="outline"
						color="white"
						disabled={isLoading}
						onClick={() => modals.closeAll()}
					>
						Cancel
					</Button>
					<Button
						bg="blue"
						disabled={isLoading}
						loading={isLoading}
						type="submit"
					>
						Save
					</Button>
				</Group>
			</Stack>
		</form>
	);
};
