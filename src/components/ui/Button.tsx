import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        // Base styles
        "font-semibold",
        "rounded-lg",
        "transition-all",
        "duration-300",
        "inline-flex",
        "items-center",
        "justify-center",

        // Size variants
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",

        // Variant styles
        variant === "primary" &&
          "bg-accent text-white bg-black border border-black  shadow-soft",
        variant === "secondary" &&
          "bg-accent text-black border border-black  shadow-soft",
        variant === "outline" &&
          "border-2 border-accent text-accent hover:bg-accent hover:text-white shadow-soft hover:shadow-md-soft",
        variant === "ghost" &&
          "text-foreground hover:text-accent hover:bg-accent-ghost",

        // Custom classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}>
      {children}
    </button>
  );
}
