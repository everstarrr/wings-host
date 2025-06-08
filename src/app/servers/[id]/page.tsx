"use client"
import { Button, ServersBar } from "@/components";
import { DeleteServerModal } from "@/components/shared/delete-server-modal";
import { ServersSelect } from "@/components/shared/servers-select";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface ChatCardProps {
    title: string;
    data: string;
}


function ServerPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = use(params)

    return (
        <main className="w-screen lg:h-screen flex lg:flex-row flex-col lg:mt-16 mt-24 lg:bg-transparent bg-background-mobile lg:px-0 px-8">
            <ServersBar id={id} />
            <div className="lg:hidden flex flex-col gap-4">
                <ServersSelect id={id} />
                <Link href="/servers/create" className="w-full">
                    <Button font="md" className="w-full">Создать сервер</Button>
                </Link>
            </div>
            <section className="lg:bg-secondary-5 lg:pl-5 lg:pr-32 py-12 flex flex-col gap-6 w-full">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                    <CharCard title="Баланс" data="500 ₽" />
                    <CharCard title="Процессор" data="0,5 CPU" />
                    <CharCard title="Диск. пространство" data="10,5 GB" />
                    <CharCard title="Стоимость/месяц" data="1000 ₽" />
                    <CharCard title="Страна" data="Russia" />
                    <CharCard title="Город" data="Moscow" />
                    <CharCard title="Нода" data="SWE-1" />
                    <CharCard title="Стоимость/день" data="33 ₽" />
                </div>
                <div className="p-4 flex lg:flex-row flex-col justify-between bg-secondary rounded-2xl lg:gap-0 gap-4">
                    <div className="flex flex-col lg:gap-0 gap-2.5">
                        <p className="text-[20px]">Заморозка сервера</p>
                        <p className="text-sm text-secondary-3">Сервер замораживается на 30 дней, после чего, если его не активировать, удаляется</p>
                    </div>
                    <Button font="md">Заморозить сервер</Button>
                </div>
                <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="p-4 flex flex-col gap-5 lg:max-w-[345px] bg-secondary rounded-2xl">
                        <div className="flex flex-col lg:gap-0 gap-2.5">
                            <p className="text-[20px]">Удаление сервера</p>
                            <p className="text-sm text-secondary-3">Сервер замораживается на 30 дней, после чего, если его не активировать, удаляется</p>
                        </div>
                        <DeleteServerModal />
                    </div>
                    <div className="p-4 flex flex-col gap-3 lg:max-w-[345px] bg-secondary rounded-2xl">
                        <p className="inline-flex gap-2.5 text-4xl text-red-accent">
                            <TriangleAlert size={44} />
                            Важно
                        </p>
                        <p className="text-sm text-secondary-3">
                            Восстановление удаленного сервера невозможно<br className="lg:inline hidden" /><br />
                            Сервер удаляется навсегда
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

const CharCard = ({ title, data }: ChatCardProps) => {
    return (
        <div className="bg-secondary p-4 flex flex-col rounded-2xl w-full lg:gap-0 gap-2.5">
            <p className="text-sm text-secondary-3">{title}</p>
            <p className="lg:text-4xl">{data}</p>
        </div>
    )
}

export default ServerPage;