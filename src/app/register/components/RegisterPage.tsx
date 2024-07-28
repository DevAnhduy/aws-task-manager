'use client';

import Link from 'next/link';

import {
	Anchor,
	Button,
	Container,
	Flex,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import { isPassword } from '@utils/validation';

import { OtpModal } from '@/components/OtpModal';
import { useVerifyAccountMutation } from '@/services/useVerifyAccountMutation';

import { useCreateUserMutation } from '../services/useCreateUserMutation';
import { RegisterForm } from '../types';

export function RegisterPage() {
	const { mutateAsync: createUser, isPending } = useCreateUserMutation();
	const { mutateAsync: verifyAccount } = useVerifyAccountMutation();

	const form = useForm<RegisterForm>({
		initialValues: {
			email: '',
			password: '',
		},
		validate: {
			email: isEmail('Please enter a valid email address.'),
			password: isPassword(
				'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number and one special characters.',
			),
		},
	});

	const submitForm = async (values: RegisterForm) => {
		try {
			const response = await createUser(values);

			if (response.nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
				return modals.open({
					title: 'Verify Email',
					children: (
						<OtpModal
							email={values.email}
							onVerify={async ({ code }) => {
								const response = await verifyAccount({
									username: values.email,
									code,
								});

								if (response.isSignUpComplete) {
									window.location.href = '/tasks';
								}
							}}
						/>
					),
				});
			}
		} catch (err: any) {
			notifications.show({
				color: 'red',
				title: 'Create account fail',
				message: err?.toString(),
				style: {
					fontWeight: 'bold',
				},
			});
		}
	};

	return (
		<Flex h="100%" bg="dark" justify="center" align="center">
			<form onSubmit={form.onSubmit(submitForm)}>
				<Container h="fit-content" w={450}>
					<Title ta="center" fw="bold">
						Sign Up
					</Title>
					<Text c="dimmed" size="sm" ta="center" mt={5}>
						Already have an account?{' '}
						<Anchor>
							<Link href="/login">Login</Link>
						</Anchor>
					</Text>

					<Paper withBorder shadow="md" p={30} mt={30} radius="md">
						<TextInput
							label="Email"
							placeholder="example@gmail.com"
							key={form.key('email')}
							{...form.getInputProps('email')}
						/>
						<PasswordInput
							label="Password"
							placeholder="••••••••"
							mt="md"
							key={form.key('password')}
							{...form.getInputProps('password')}
						/>

						<Button
							loading={isPending}
							bg="blue"
							size="lg"
							type="submit"
							fullWidth
							mt="xl"
						>
							Sign up
						</Button>
					</Paper>
				</Container>
			</form>
		</Flex>
	);
}