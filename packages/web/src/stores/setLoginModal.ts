import create from 'zustand';

interface LoginModalStore {
  visible: boolean;
  open(): void;
  close(): void;
}

export const setLoginModalStore = create<LoginModalStore>((set) => ({
  visible: false,
  open() {
    set((prev) => ({
      ...prev,
      visible: true,
    }));
  },
  close() {
    set((prev) => ({
      ...prev,
      visible: false,
    }));
  },
}));
