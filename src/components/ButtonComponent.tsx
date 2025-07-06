"use client";
import Link from "next/link";

type Props = {
  href: string;
  onClick?: (param?: string) => void;
  className?: string;
  text: string;
};

const defaultClassName =
  "bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/80 w-fit";

export default function ButtonComponent({
  href,
  onClick,
  className = defaultClassName,
  text,
}: Props) {
  return (
    <Link
      href={href}
      onClick={() => onClick && onClick()}
      className={className ? `${defaultClassName} ${className}` : className}
    >
      {text}
    </Link>
  );
}
