import create from 'zustand';

interface LoginModalStore {
  isVisible: boolean;
  openLoginModal(): void;
  closeLoginModal(): void;
}

export const setLoginModalStore = create<LoginModalStore>((set) => ({
  isVisible: false,
  openLoginModal() {
    set((prev) => ({
      ...prev,
      isVisible: true,
    }));
  },
  closeLoginModal() {
    set((prev) => ({
      ...prev,
      isVisible: false,
    }));
  },
}));
