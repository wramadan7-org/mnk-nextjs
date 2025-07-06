"use client";
import Link from "next/link";

type Props = {
  href: string;
  onClick?: (param?: string) => void;
  className?: string;
  text: string;
};

export default function ButtonComponent({
  href,
  onClick,
  className = "bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 w-fit",
  text,
}: Props) {
  return (
    <Link
      href={href}
      onClick={() => onClick && onClick()}
      className={className}
    >
      {text}
    </Link>
  );
}
