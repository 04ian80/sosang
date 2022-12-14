import create from 'zustand';

interface MapSearchProps {
  isVisible: boolean;
  openMapSearch(): void;
  closeMapSearch(): void;
}

export const setShowMapSearch = create<MapSearchProps>((set) => ({
  isVisible: false,
  openMapSearch() {
    set((prev) => ({
      ...prev,
      isVisible: true,
    }));
  },
  closeMapSearch() {
    set((prev) => ({
      ...prev,
      isVisible: false,
    }));
  },
}));
