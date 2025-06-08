import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "whitespace-nowrap rounded-4xl disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 leading-6 cursor-pointer pseudo-base",
    {
        variants: {
            variant: {
                default:
                    "bg-main-accent primary-hover",
                outline:
                    "bg-transparent border-foreground-2 border",
                secondary:
                    "bg-secondary hover:bg-secondary-hover",
                black:
                    "bg-background-3 hover:bg-secondary-hover"
            },
            size: {
                default: "lg:px-8 px-3 lg:py-4 py-2",
            },
            font: {
                default: "font-semibold lg:text-xl text-xs",
                md: "font-normal text-base leading-[19px]"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            font: "default"
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, font, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, font, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
