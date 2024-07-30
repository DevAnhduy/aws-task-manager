import { Combobox, Text, useCombobox } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { Task } from '@prisma/client';
import { IconDots } from '@tabler/icons-react';

import { useDeleteTaskMutation } from '../services/useDeleteTaskMutation';

import { TaskFormModal } from './TaskFormModal';

const menus = [
	{ value: 'edit', label: 'Edit' },
	{ value: 'delete', label: 'Delete' },
];

type TaskActions = {
	data: Task;
};

export const TaskActions = ({ data }: TaskActions) => {
	const { mutateAsync: deleteTask } = useDeleteTaskMutation();

	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const handleDelete = async () => {
		try {
			const response = await deleteTask(data.id);

			if (response.status === 200) {
				return notifications.show({
					color: 'green',
					message: 'Delete task success',
					style: {
						fontWeight: 'bold',
					},
				});
			}
		} catch (err) {
			notifications.show({
				color: 'red',
				title: 'Delete task fail',
				message: err?.toString(),
				style: {
					fontWeight: 'bold',
				},
			});
		}
	};

	const getAction = (key: string) => {
		if (key === 'edit') {
			return modals.open({
				title: 'Update task',
				children: <TaskFormModal id={data.id} />,
			});
		}

		if (key === 'delete') {
			return modals.openConfirmModal({
				title: 'Delete task',
				children: <Text>Are you sure want delete this task?</Text>,
				labels: { confirm: 'Delete', cancel: 'Cancel' },
				confirmProps: {
					bg: 'red',
				},
				onConfirm: handleDelete,
			});
		}
	};

	const options = menus.map((item) => (
		<Combobox.Option
			value={item.label}
			key={item.value}
			bg={item.value === 'delete' ? 'red' : ''}
			onClick={() => getAction(item.value)}
		>
			{item.label}
		</Combobox.Option>
	));

	return (
		<Combobox store={combobox} width={100} withArrow>
			<Combobox.Target>
				<IconDots onClick={() => combobox.toggleDropdown()} />
			</Combobox.Target>

			<Combobox.Dropdown>
				<Combobox.Options>{options}</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	);
};
