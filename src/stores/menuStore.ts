import { create } from "zustand";

type State = {
  isOpenBurger: boolean;
  activeMenu: string;
};

type Actions = {
  actions: {
    toggleBurger: () => void;
    setActiveMenu: (menu: string) => void;
  };
};

const useMenuStore = create<State & Actions>((set) => ({
  isOpenBurger: false,
  activeMenu: "",
  actions: {
    toggleBurger: () => set((state) => ({ isOpenBurger: !state.isOpenBurger })),
    setActiveMenu: (menu: string) => set({ activeMenu: menu }),
  },
}));

export const useIsOpenBurger = () =>
  useMenuStore((state) => state.isOpenBurger);
export const useActiveMenu = () => useMenuStore((state) => state.activeMenu);
export const useMenuActions = () => useMenuStore((state) => state.actions);
