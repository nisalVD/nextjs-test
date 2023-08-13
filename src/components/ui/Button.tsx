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
        xs: "px-2 py-1 text-xs",
        sm: "px-2.5 py-1.5",
        md: "px-3 py-2",
        lg: "px-3 py-2",
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
