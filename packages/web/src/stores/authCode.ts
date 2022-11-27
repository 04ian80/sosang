import create from 'zustand';

interface AuthCode {
  code: string | null;
  setCode: (code: string | null) => void;
}

export const setCode = create<AuthCode>((set) => ({
  code: '',
  setCode: (code) => {
    set(() => ({ code: code }));
  },
}));
