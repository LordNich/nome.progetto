import { create } from 'zustand';

interface AppState {
  answers: Record<string, number>;
  score: number | null;
  setAnswer: (id: string, value: number) => void;
  setScore: (score: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  answers: {},
  score: null,
  setAnswer: (id, value) => set((state) => ({
    answers: { ...state.answers, [id]: value }
  })),
  setScore: (score) => set({ score })
}));
