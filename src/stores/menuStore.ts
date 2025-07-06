import { MenuType } from "@/types/menuType";
import { create } from "zustand";

type State = {
  isOpenBurger: boolean;
  activeMenu: MenuType;
};

type Actions = {
  actions: {
    toggleBurger: () => void;
    setActiveMenu: (menu: MenuType) => void;
    handleClickMenu: (menu?: MenuType) => void;
  };
};

const useMenuStore = create<State & Actions>((set) => ({
  isOpenBurger: false,
  activeMenu: "",
  actions: {
    toggleBurger: () => set((state) => ({ isOpenBurger: !state.isOpenBurger })),
    setActiveMenu: (menu: MenuType) => set({ activeMenu: menu }),
    handleClickMenu: (menu?: MenuType) =>
      set((state) => {
        if (!menu) {
          return { isOpenBurger: !state.isOpenBurger };
        } else {
          return { isOpenBurger: !state.isOpenBurger, activeMenu: menu };
        }
      }),
  },
}));

export const useIsOpenBurger = () =>
  useMenuStore((state) => state.isOpenBurger);
export const useActiveMenu = () => useMenuStore((state) => state.activeMenu);
export const useMenuActions = () => useMenuStore((state) => state.actions);
