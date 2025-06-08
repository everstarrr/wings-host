import { cn } from "@/lib/utils";
import Link from "next/link";

interface ArticleCardProps {
    img: string;
    description: string;
    title: string;
    className?: string;
    wrapperClassName?: string;
    id: number;
}

export const ArticleCard = ({ img, description, title, id, className, wrapperClassName }: ArticleCardProps) => {
    return (
        <Link href={`/articles/${id}`} className={wrapperClassName}>
            <article className={cn("flex flex-col lg:gap-5 gap-3 lg:px-10 lg:pt-12 lg:pb-16 lg:border-r lg:border-r-stroke lg:flex-1 lg:hover:bg-primary-hover transition-all duration-150 cursor-pointer", className)}>
                <div className="flex flex-col lg:gap-5 gap-1">
                    <img src={img} alt={title} className="h-36 object-cover" />
                    <p className="text-secondary-3 lg:text-base text-xs">{description}</p>
                </div>
                <h4 className="lg:text-2xl text-sm">{title}</h4>
            </article>
        </Link>
    )
}