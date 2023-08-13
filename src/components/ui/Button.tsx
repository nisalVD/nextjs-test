import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-md shadow-sm focus-visible:outline-offset-2 text-sm font-semibold",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600 text-white",
        dark: "",
      },
      size: {
        default: "px-3.5 py-2.5",
        full: "px-0 py-0 w-full h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
