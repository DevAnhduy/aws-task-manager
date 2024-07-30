'use client';

import { ReactNode, useEffect } from 'react';

import { LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';

import { useUserStore } from '@stores/auth';

type Props = {
	children: ReactNode;
};

import { usePathname } from 'next/navigation';

import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { setToken } from '@utils/axios';

import { AuthenticatedLayout } from '@/components/AuthenticatedLayout';

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
					const session = await fetchAuthSession();

					if (!user) {
						window.location.href = '/login';
					}

					setUser(user);
					setToken(session.tokens?.accessToken.toString() || '');

					if (isAuthPage) {
						return (window.location.href = '/tasks');
					}

					toggle();
				} catch (err) {
					if (!isAuthPage) {
						window.location.href = '/login';
					}
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
			<ModalsProvider>
				<AuthenticatedLayout>{children}</AuthenticatedLayout>
			</ModalsProvider>
			<Notifications position="bottom-right" zIndex={2000} />
		</QueryClientProvider>
	);
};
