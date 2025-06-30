import { cn } from "@/lib/utils";
import Link from "next/link";

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
  font?: "default" | "md";
  className?: string;
}

export const CustomLink = ({
  children,
  href,
  font = "default",
  className,
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap rounded-4xl flex justify-center disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 leading-6 cursor-pointer pseudo-base bg-main-accent primary-hover lg:px-8 px-3 lg:py-4 py-2",
        font === "default"
          ? "font-semibold lg:text-xl text-xs"
          : "font-normal text-base leading-[19px]",
        className
      )}
    >
      {children}
    </Link>
  );
};
