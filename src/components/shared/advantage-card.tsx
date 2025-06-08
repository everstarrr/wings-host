import { cn } from "@/lib/utils";
import React from "react"

interface AdvantageCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string
}

export const AdvantageCard = ({ icon, description, title, className }: AdvantageCardProps) => {
    return (
        <div className={cn("bg-background-2 lg:p-12 px-6 py-4 flex flex-col lg:gap-8 gap-3.5 lg:rounded-3xl rounded-2xl border border-stroke", className)}>
            <div className="flex lg:flex-col lg:gap-8 flex-row gap-2 lg:items-start items-center">
                {icon}
                <h3 className="lg:text-4xl text-base font-medium">{title}</h3>
            </div>
            <span className="text-secondary-2 lg:text-2xl text-sm">{description}</span>
        </div>
    )
}