import create from 'zustand';

interface CurrentLocation {
  location: string;
  setLocation: (newLocation: string) => void;
}

export const setCurrentLocation = create<CurrentLocation>((set) => ({
  location: '지역',
  setLocation: (newLocation) => {
    set((prev) => ({
      ...prev,
      location: newLocation,
    }));
  },
}));
