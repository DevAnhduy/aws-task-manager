import { create } from 'zustand';

import { User } from '@/types';

type State = {
	user: User | null;
};

type Actions = {
	setUser: (user: User | null) => void;
};

export const useUserStore = create<State & Actions>((set) => ({
	user: null,
	setUser: (user: User | null) => set({ user }),
}));
