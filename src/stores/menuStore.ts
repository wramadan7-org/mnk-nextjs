import { MenuType } from "@/types/menuType";
import { create } from "zustand";

type State = {
  isOpenBurger: boolean;
  activeMenu: MenuType;
};

type Actions = {
  actions: {
    toggleBurger: (isActive?: boolean) => void;
    setActiveMenu: (menu: MenuType) => void;
    handleClickMenu: (menu?: MenuType) => void;
  };
};

const useMenuStore = create<State & Actions>((set) => ({
  isOpenBurger: false,
  activeMenu: "",
  actions: {
    toggleBurger: (isActive?: boolean) =>
      set((state) => ({
        isOpenBurger: isActive ? isActive : !state.isOpenBurger,
      })),
    setActiveMenu: (menu: MenuType) => set({ activeMenu: menu }),
    handleClickMenu: (menu?: MenuType) =>
      set((state) => {
        if (!menu?.length) {
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
