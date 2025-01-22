import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[55px] w-full rounded-md border border-neutral-200 bg-transparent px-4 py-1 text-base  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [passwordType, setPasswordType] = React.useState<"password" | "text">(
      "password"
    );

    return (
      <div className="relative">
        <input
          type={passwordType}
          className={cn(
            "flex  w-full rounded-md border border-input bg-transparent px-[15px] py-[15px] text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[14px] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />

        <button
          onClick={() => {
            setPasswordType(passwordType === "password" ? "text" : "password");
          }}
          className="absolute -translate-y-1/2 cursor-pointer right-3 top-1/2"
          type="button"
        >
          {passwordType === "password" ? (
            <EyeOff className="w-4" />
          ) : (
            <Eye className="w-4" />
          )}
        </button>
      </div>
    );
  }
);
