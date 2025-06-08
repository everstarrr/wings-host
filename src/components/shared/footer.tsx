"use client"
import { protectedRoutes } from "@/data/protected-routes"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useMemo } from "react";

export const Footer = () => {

    const pathname = usePathname();

    const isProtected = useMemo(()=>{
        for (const value of protectedRoutes) {
            if (pathname.includes(value)) return true;
        }
        return false;
    }, [pathname])

    if (isProtected && typeof window !== "undefined" && window.innerWidth > 1024) {
        return (
            <footer className="flex flex-col bg-secondary text-xl">
                <div className="p-16 flex gap-6">
                    <div className="flex flex-col gap-8 flex-1">
                        <Image src="/images/header-logo.png" alt="Logo" width={294} height={56} className="h-14" />
                        <span>WINGS HOST - главный герой в мире хостингов и непобедимый соперник среди конкурентов!</span>
                        <span>Напишите нам на <span className="text-main-accent">info@wingshost.ru</span></span>
                    </div>
                    <div className="flex gap-6 flex-1">
                        <div className="flex-1 flex flex-col gap-8">
                            <p className="text-2xl">Навигация</p>
                            <div className="flex flex-col gap-4">
                                <Link href="/profile">Личный кабинет</Link>
                                <Link href="/servers">Серверы</Link>
                                <Link href="/articles">Статьи</Link>
                                <Link href="/minecraft">Minecraft</Link>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-8">
                            <p className="text-2xl">Контакты</p>
                            <div className="flex flex-col gap-4">
                                <p>+ 7 905 899 89 89</p>
                                <p>Санкт-Петербург, Кронверкский пр. 49</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-16">
                    © 2024 wingshost.ru
                </div>
            </footer>
        )
    } else return (
        <footer className={cn("flex flex-col lg:mt-0 ", isProtected && "bg-background-mobile")}>
            <div className="lg:h-36 h-16 relative text-center font-semibold text-2xl flex lg:justify-center justify-between items-center border-b-stroke border-b lg:px-0 px-8">
                <p className="my-auto lg:text-base text-sm">support@wh.ru</p>
                <aside className="flex gap-12 top-12 right-12 items-center lg:absolute">
                    <a href="#">
                        <img src="/icons/telegram.svg" alt="Telegram" className="lg:h-12 h-8" />
                    </a>
                    <a href="#">
                        <img src="/icons/vk.svg" alt="VK" className="lg:h-12 h-8" />
                    </a>
                    <a href="#">
                        <img src="/icons/discord.svg" alt="Discord" className="lg:w-12 w-8" />
                    </a>
                </aside>
            </div>
            <div className="lg:h-36 h-20 text-center text-secondary-3 lg:text-2xl text-xs leading-8 flex justify-center lg:items-center items-end">
                © 2024 wingshost.ru. All rights reserved
            </div>
        </footer>
    )
}