// components/ui/Button.jsx
import React from "react";

// import { cn } from "../utils/cn";

export default function Button({
  text,
  children,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false, 
  ...props
}) {
  const base = cn(
    "inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    fullWidth && "w-full" 
  );

  const variants = {
    primary: "bg-sky-400 text-white hover:bg-sky-500 focus:ring-sky-500",
    outline: "border border-sky-400 text-sky-500 hover:bg-blue-50 focus:ring-sky-500",
    ghost: "bg-transparent text-sky-500 hover:bg-sky-100 focus:ring-sky-400",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    reset: "bg-gray-400 text-white hover:bg-gray-500 focus:ring-gray-500",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children ?? text}
    </button>
  );
}