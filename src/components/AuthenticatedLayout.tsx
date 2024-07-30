import { ReactNode } from 'react';

import { Avatar, Box, Combobox, Group, useCombobox } from '@mantine/core';

import { signOut } from 'aws-amplify/auth';

type AuthenticatedLayoutProps = {
	children: ReactNode;
};

const menus = [{ value: 'logout', label: 'Log out' }];

export const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	});

	const getAction = (key: string) => {
		if (key === 'logout') {
			signOut();

			return (window.location.href = '/login');
		}
	};

	const options = menus.map((item) => (
		<Combobox.Option
			value={item.label}
			key={item.value}
			onClick={() => getAction(item.value)}
		>
			{item.label}
		</Combobox.Option>
	));

	return (
		<Box h="100vh">
			<Group bg="gray" justify="end" ta="right" p={20}>
				<Combobox store={combobox} width={100} withArrow>
					<Combobox.Target>
						<Avatar radius="xl" onClick={() => combobox.toggleDropdown()} />
					</Combobox.Target>

					<Combobox.Dropdown>
						<Combobox.Options>{options}</Combobox.Options>
					</Combobox.Dropdown>
				</Combobox>
			</Group>
			{children}
		</Box>
	);
};
