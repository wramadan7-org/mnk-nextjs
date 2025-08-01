"use client";
import {
  useActiveMenu,
  useIsOpenBurger,
  useMenuActions,
} from "@/stores/menuStore";
import Link from "next/link";
import ButtonComponent from "./ButtonComponent";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const pathname = usePathname();
  const isOpenBurger = useIsOpenBurger();
  const activeMenu = useActiveMenu();
  const { handleClickMenu } = useMenuActions();

  return (
    <nav className="flex sticky top-0 items-center justify-between py-4 px-4 sm:px-7 lg:px-10 bg-primary z-50 text-white">
      <Link
        href="/"
        onClick={() => handleClickMenu("home")}
        className="text-lg font-bold text-white"
      >
        MNK
      </Link>

      <ul className="hidden lg:flex space-x-4">
        <li>
          <Link
            href="/"
            onClick={() => handleClickMenu("home")}
            className={`${
              (activeMenu === "home" || pathname === "/") && "text-secondary"
            } hover:text-secondary`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            onClick={() => handleClickMenu("about-us")}
            className={`${
              (activeMenu === "about-us" || pathname === "/about-us") &&
              "text-secondary"
            } hover:text-secondary`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/product-service"
            onClick={() => handleClickMenu("product-service")}
            className={`${
              (activeMenu === "product-service" ||
                pathname === "/product-service") &&
              "text-secondary"
            } hover:text-secondary`}
          >
            Product & Service
          </Link>
        </li>
        <li>
          <Link
            href="/supply-chain"
            onClick={() => handleClickMenu("supply-chain")}
            className={`${
              (activeMenu === "supply-chain" || pathname === "/supply-chain") &&
              "text-secondary"
            } hover:text-secondary`}
          >
            Supply Chain
          </Link>
        </li>
        <li>
          <Link
            href="/csr"
            onClick={() => handleClickMenu("csr")}
            className={`${
              (activeMenu === "csr" || pathname === "/csr") && "text-secondary"
            } hover:text-secondary`}
          >
            CSR
          </Link>
        </li>
        <li>
          <Link
            href="/news"
            onClick={() => handleClickMenu("news")}
            className={`${
              (activeMenu === "news" || pathname === "/news") &&
              "text-secondary"
            } hover:text-secondary`}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/career"
            onClick={() => handleClickMenu("career")}
            className={`${
              (activeMenu === "career" || pathname === "/career") &&
              "text-secondary"
            } hover:text-secondary`}
          >
            Career
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center space-x-4">
        <ButtonComponent
          href="/contact-us"
          onClick={() => handleClickMenu("contact-us")}
          text="Contact Us"
        />
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          className="text-white focus:outline-none cursor-pointer"
          onClick={() => handleClickMenu("")}
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
