"use client";
import { useIsOpenBurger, useMenuActions } from "@/stores/menuStore";
import Link from "next/link";
import ButtonComponent from "./ButtonComponent";

export default function NavbarComponent() {
  const isOpenBurger = useIsOpenBurger();
  const { setActiveMenu, toggleBurger } = useMenuActions();

  const handleToggleMenu = (menu: string) => {
    if (menu?.length) {
      setActiveMenu(menu);
    }

    toggleBurger();
  };

  return (
    <nav className="flex sticky top-0 items-center justify-between p-4 bg-primary z-50">
      <Link
        href="/"
        onClick={() => handleToggleMenu("home")}
        className="text-lg font-bold dark:text-white text-black"
      >
        MNK
      </Link>

      <ul className="hidden lg:flex space-x-4">
        <li>
          <Link
            href="/"
            onClick={() => handleToggleMenu("home")}
            className="hover:text-secondary"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/product-service"
            onClick={() => handleToggleMenu("product-service")}
            className="hover:text-secondary"
          >
            Product & Service
          </Link>
        </li>
        <li>
          <Link
            href="/supply-chain"
            onClick={() => handleToggleMenu("supply-chain")}
            className="hover:text-secondary"
          >
            Supply Chain
          </Link>
        </li>
        <li>
          <Link
            href="/csr"
            onClick={() => handleToggleMenu("csr")}
            className="hover:text-secondary"
          >
            CSR
          </Link>
        </li>
        <li>
          <Link
            href="/news"
            onClick={() => handleToggleMenu("news")}
            className="hover:text-secondary"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/career"
            onClick={() => handleToggleMenu("career")}
            className="hover:text-secondary"
          >
            Career
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center space-x-4">
        <ButtonComponent
          href="/contact-us"
          onClick={() => handleToggleMenu("contact-us")}
          text="Contact Us"
        />
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          className="dark:text-white text-black focus:outline-none cursor-pointer"
          onClick={() => handleToggleMenu("")}
          aria-expanded={isOpenBurger}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation"
        >
          {isOpenBurger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
