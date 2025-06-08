"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

import { useSession } from "next-auth/react";
import { logoutAction } from "@/app/(auth)/logout"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

interface NavLinkProps {
    title: string;
    href: string;
}

export const Header = () => {

    const { data: session, update } = useSession();

    const handleLogout = () => {
        logoutAction();
        update();
    }


    return (
        <header className="w-full bg-secondary fixed left-0 top-0 z-20 border-b border-b-white/10 px-7 lg:py-0 py-2">
            <div className="max-w-7xl flex justify-between items-center mx-auto">
                <Sheet>
                    <SheetTrigger>
                        <Menu size={24} className="lg:hidden block" />
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col gap-3 p-6 border-0">
                        <SheetTitle />
                        <NavLink href="/profile" title="Личный кабинет" />
                        <NavLink href="/servers" title="Серверы" />
                        <NavLink href="/articles" title="Статьи" />
                        <NavLink href="/minecraft" title="Minecraft" />
                    </SheetContent>
                </Sheet>
                <Link href="/">
                    <Image src="/images/header-logo.png" alt="Logo" width={294} height={56} className="lg:h-full lg:w-full h-9 w-48" />
                </Link>
                <nav className="lg:flex hidden px-4 py-6 gap-8 leading-[19px]">
                    <NavLink href="/profile" title="Личный кабинет" />
                    <NavLink href="/servers" title="Серверы" />
                    <NavLink href="/articles" title="Статьи" />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="pb-1">Услуги</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem >
                                <Link href="/minecraft" className="flex gap-1">
                                    <Image src="/icons/minecraftIcon.png" alt="Minecraft" className="w-4 h-4" width={16} height={16} />
                                    Minecraft
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
                {!session ?
                    <div className="flex gap-5 items-center">
                        <Link href="/login">Войти</Link>
                        <Link href="/register">
                            <Button font="md">Регистрация</Button>
                        </Link>
                    </div>
                    :
                    <div className="flex gap-5 items-center">
                        <p className="lg:inline hidden">Баланс: 208,3 ₽</p>
                        <p className="lg:inline hidden">Виктор Дудка</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Image src="/images/avatar.png" alt="Avatar" width={48} height={48} className="lg:w-12 lg:h-12 w-9 h-9 rounded-full" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={handleLogout}>
                                    Выйти
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                }
            </div>
        </header>
    )
}

const NavLink = ({ href, title }: NavLinkProps) => {

    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={cn("pb-1 w-fit", pathname.includes(href) && "border-b border-main-accent")}
        >
            {title}
        </Link>
    )
}