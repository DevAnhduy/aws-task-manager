import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

import { ReactNode } from 'react';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

import { AppProvider } from './provider';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import './globals.css';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Task Manager',
	description: 'This is task manager project',
};

const theme = createTheme({
	fontFamily: quicksand.style.fontFamily,
});

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>

			<body className={quicksand.className}>
				<MantineProvider defaultColorScheme="dark" theme={theme}>
					<AppProvider>{children}</AppProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
