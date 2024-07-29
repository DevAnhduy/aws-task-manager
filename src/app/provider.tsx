'use client';

import { ReactNode, useEffect } from 'react';

import { Box, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { getCurrentUser } from 'aws-amplify/auth';

import { useUserStore } from '@stores/auth';

type Props = {
	children: ReactNode;
};

import { usePathname } from 'next/navigation';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../aws-exports';

const queryClient = new QueryClient();

export const AppProvider = ({ children }: Props) => {
	const pathname = usePathname();

	const [visible, { toggle }] = useDisclosure(true);

	const { user, setUser } = useUserStore();

	const isAuthPage =
		pathname.includes('login') || pathname.includes('register');

	useEffect(() => {
		if (!user) {
			const getUser = async () => {
				try {
					const user = await getCurrentUser();
					console.log('user: ', user);
					if (!user) {
						window.location.href = '/login';
					}

					if (isAuthPage) {
						return (window.location.href = '/tasks');
					}

					setUser(user);
					toggle();
				} catch (err) {
					console.error('err: ', err);
					//window.location.href = '/login';
				}
			};

			getUser();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, isAuthPage]);

	if (!user && !isAuthPage) {
		return (
			<QueryClientProvider client={queryClient}>
				<LoadingOverlay
					visible={visible}
					zIndex={1000}
					overlayProps={{ radius: 'sm', blur: 2 }}
				/>
			</QueryClientProvider>
		);
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Box bg="white" h="100vh">
				{children}
			</Box>
		</QueryClientProvider>
	);
};
