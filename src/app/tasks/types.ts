import { Task } from '@prisma/client';

export type TaskForm = Omit<Task, 'id' | 'createdBy'>;
