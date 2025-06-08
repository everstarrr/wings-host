import { cn } from "@/lib/utils";
import Image from "next/image"

interface ReviewProps {
    stars: 1 | 2 | 3 | 4 | 5;
    avatar: string;
    name: string;
    text: string;
    className?: string;
}

export const Review = ({ stars, avatar, text, name, className }: ReviewProps) => {
    return (
        <div className={cn("flex flex-col gap-6 bg-gray/80 rounded-2xl p-6 lg:max-w-full max-w-[calc(100vw_-_64px)]", className)}>
            <div className="flex lg:gap-6 gap-3 items-center">
                <Image src={avatar} alt="User" width={64} height={64} className="w-16 h-16 rounded-full" />
                <div className="flex flex-col lg:gap-3 gap-2">
                    <p className="lg:text-2xl lg:leading-[22px] leading-4">{name}</p>
                    <span className="inline-flex gap-1.5 lg:text-base text-sm">
                        {Array.from({ length: stars }).map((_, index) => (
                            <span key={index} className="text-main-accent">★</span>
                        ))}
                        {Array.from({ length: 5 - stars }).map((_, index) => (
                            <span key={index}>★</span>
                        ))}
                    </span>
                </div>
            </div>
            <span className="lg:text-base text-sm">{text}</span>
        </div>
    )
}