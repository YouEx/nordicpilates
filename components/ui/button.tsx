import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-graphite text-white shadow hover:bg-graphite/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-graphite/20 bg-white shadow-sm hover:bg-graphite/5 hover:border-graphite/40 hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-porcelain text-graphite shadow-sm hover:bg-porcelain/80 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
        ghost: "hover:bg-porcelain/50 hover:text-graphite",
        link: "text-graphite underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-[#C4A582] to-[#B89968] text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
