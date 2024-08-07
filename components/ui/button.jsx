import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-secondary text-primary",
        primary: 'bg-primary text-white',
        outline: 'border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-primary'
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[44px] px-4",
        lg: "h-[46px] px-6 text-sm tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
