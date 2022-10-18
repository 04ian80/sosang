import create from 'zustand';

interface loginModalStore {
  visible: boolean;
  open(): void;
  close(): void;
}

export const setLoginModalStore = create<loginModalStore>((set) => ({
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
