import { useState } from 'react';

import { Button, PinInput, Stack, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

type OtpModalForm = {
	code: string;
};

type OtpModalProps = {
	email: string;
	onVerify: (values: OtpModalForm) => Promise<void>;
};

export const OtpModal = ({ email, onVerify }: OtpModalProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<OtpModalForm>({
		initialValues: {
			code: '',
		},
		validate: {
			code: isNotEmpty('Please provide code'),
		},
	});

	const handleSubmit = async (values: OtpModalForm) => {
		try {
			setIsLoading(true);
			await onVerify(values);
			setIsLoading(false);
		} catch (err: any) {
			setIsLoading(false);
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
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Stack justify="center" align="center" gap={30}>
				<Text fz={16} ta="center">
					Please enter the 6-digits code we have sent to your account
					<Text c="blue" fw={500} component="span">
						&nbsp;{email}
					</Text>
				</Text>
				<Text fz={16} ta="center">
					It may take up 1 minute to receive the code
				</Text>
				<PinInput
					length={6}
					type="number"
					key={form.key('code')}
					{...form.getInputProps('code')}
				/>
				<Button
					mb={15}
					bg="blue"
					size="md"
					w="fit-content"
					fullWidth
					type="submit"
					loading={isLoading}
				>
					Verify account
				</Button>
			</Stack>
		</form>
	);
};
