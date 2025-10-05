import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A582] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: Premium bronze gradient for main CTAs
        default:
          "bg-gradient-to-r from-[#C4A582] to-[#B89968] text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] font-semibold",
        // Secondary: Graphite outline for secondary actions  
        outline:
          "border-2 border-graphite/30 bg-transparent text-graphite shadow-sm hover:bg-graphite/5 hover:border-graphite/50 hover:scale-[1.02] active:scale-[0.98]",
        // Tertiary: Subtle ghost for navigation
        ghost: "hover:bg-porcelain/70 hover:text-graphite text-graphite/70",
        // Link style
        link: "text-graphite underline-offset-4 hover:underline hover:text-[#C4A582]",
        // Dark variant for light backgrounds
        dark:
          "bg-graphite text-white shadow hover:bg-graphite/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        // Destructive for delete/cancel
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
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
