import create from 'zustand';

interface Options {
  doc: string;
  page: { [key: string]: string };
  setDoc: (value: string) => void;
  setPage: (selectVal: string, textVal: string) => void;
}

export const setCode = create<Options>((set) => ({
  doc: '',
  page: {
    scope: '',
    date: '',
    accuracy: '',
    sort: '',
  },
  setDoc: (value) => {
    set(() => ({ doc: value }));
  },
  setPage: (selectVal, textVal) => {
    set(() => ({}));
  },
}));
