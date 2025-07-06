"use client";
import {
  useActiveMenu,
  useIsOpenBurger,
  useMenuActions,
} from "@/stores/menuStore";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SidebarComponent() {
  const isOpenBurger = useIsOpenBurger();
  const activeMenu = useActiveMenu();
  const { toggleBurger, handleClickMenu } = useMenuActions();

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (isOpenBurger) handleClickMenu("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickMenu, isOpenBurger, toggleBurger]);

  if (!isOpenBurger) {
    return null;
  }

  return (
    <aside
      ref={sidebarRef}
      className="w-64 h-dvh bg-primary text-white pb-4 px-4 sm:px-7 fixed top-0 left-0 lg:hidden shadow-lg z-50 overflow-auto"
    >
      <div className="text-lg font-bold mb-4 py-4 sticky top-0 left-0 bg-primary">
        MNK
      </div>
      <ul className="space-y-2">
        <li className="flex group">
          <Link
            href="#"
            onClick={() => handleClickMenu("home")}
            className={`w-full ${
              activeMenu === "home" && "text-secondary"
            } group-hover:text-secondary`}
          >
            Home
          </Link>
        </li>
        <li className="flex group">
          <Link
            href="#"
            onClick={() => handleClickMenu("product-service")}
            className={`w-full ${
              activeMenu === "product-service" && "text-secondary"
            } group-hover:text-secondary`}
          >
            Product & Service
          </Link>
        </li>
        <li className="flex group">
          <Link
            href="#"
            onClick={() => handleClickMenu("supply-chain")}
            className={`w-full ${
              activeMenu === "supply-chain" && "text-secondary"
            } group-hover:text-secondary`}
          >
            Supply Chain
          </Link>
        </li>
        <li className="flex group">
          <Link
            href="#"
            onClick={() => handleClickMenu("csr")}
            className={`w-full ${
              activeMenu === "csr" && "text-secondary"
            } group-hover:text-secondary`}
          >
            CSR
          </Link>
        </li>
        <li className="flex group">
          <Link
            href="#"
            onClick={() => handleClickMenu("news")}
            className={`w-full ${
              activeMenu === "news" && "text-secondary"
            } group-hover:text-secondary`}
          >
            News
          </Link>
        </li>
        <li className="flex group">
          <Link
            href="#"
            onClick={() => handleClickMenu("career")}
            className={`w-full ${
              activeMenu === "career" && "text-secondary"
            } group-hover:text-secondary`}
          >
            Career
          </Link>
        </li>
        <li className="flex group">
          <Link
            href="#"
            onClick={() => handleClickMenu("contact-us")}
            className="w-full bg-secondary group-hover:bg-secondary/80 text-center rounded py-1 text-white"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </aside>
  );
}
