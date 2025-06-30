"use client"
import { Button, Input, ServersBar } from "@/components";
import { ServersSelect } from "@/components/shared/servers-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { apiData, coreData, minecraftData } from "@/data/selectData";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function CreateServer() {

    const [node, setNode] = useState<string | null>(null);

    const [ram, setRam] = useState<number>(32);
    const [cpu, setCpu] = useState<number>(8);
    const [disk, setDisk] = useState<number>(100);

    const { data: session } = useSession();

    // useEffect(() => {
    //     if (!session) redirect("/login");
    // }, [session])

    const dayPrice = useMemo(() => ram * 30 + cpu * 20 + disk * 10, [ram, cpu, disk])

    return (
        <main className="w-screen h-auto flex lg:flex-row flex-col lg:mt-16 mt-24 lg:px-0 px-8 lg:pb-0 pb-32 lg:gap-0 gap-12 lg:bg-transparent bg-background-mobile">
            <ServersBar />
            <ServersSelect className="lg:hidden" />
            <section className="lg:p-12 flex flex-col flex-1 max-w-3xl lg:mx-auto gap-12 ">
                <h1 className="text-6xl">Создать сервер</h1>
                <div className="flex flex-col gap-6">
                    <div className="w-full bg-[url('/images/servers/minecraft.png')] aspect-[793/447]
                 bg-center bg-cover bg-no-repeat flex justify-center items-center lg:text-7xl text-3xl">
                        Minecraft
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите версию" />
                            </SelectTrigger>
                            <SelectContent>
                                {minecraftData.map((item) => (
                                    <SelectItem key={item.value} value={item.value} className="flex gap-3 items-center w-full">
                                        <Image src={item.img} alt={item.title} width={24} height={24} className="w-6 h-6" />
                                        {item.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите API" />
                            </SelectTrigger>
                            <SelectContent>
                                {apiData.map((item) => (
                                    <SelectItem key={item.value} value={item.value} className="flex gap-3 items-center w-full">
                                        <Image src={item.img} alt={item.title} width={24} height={24} className="w-6 h-6" />
                                        {item.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите ядро" />
                            </SelectTrigger>
                            <SelectContent>
                                {coreData.map((item) => (
                                    <SelectItem key={item.value} value={item.value} className="flex gap-3 items-center w-full">
                                        <Image src={item.img} alt={item.title} width={24} height={24} className="w-6 h-6" />
                                        {item.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button font="md">Создать сервер</Button>
                </div>
                <div className="flex flex-col gap-6">
                    <Input placeholder="Имя" className="lg:h-12 h-7" />
                    <div className="grid grid-cols-2 gap-y-4 gap-x-5">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setNode(`node-${index}`)}
                                className={cn("rounded-2xl border-2 border-stroke-3 w-full lg:p-4 px-6 py-2 flex justify-center items-center" +
                                    " bg-secondary gap-2.5 hover:bg-secondary-6 cursor-pointer transition-all duration-150",
                                    node === `node-${index}` && "hover:bg-secondary border-white")}
                            >
                                <Image src="/icons/argentina.svg" alt="Argentina" width={30} height={30} className="w-[30px] h-[30px]" />
                                SWE-1
                            </div>
                        ))}
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="bg-secondary rounded-2xl p-4 flex flex-col flex-1 lg:gap-0 gap-2.5">
                            <p className="text-secondary-3 text-sm">Модель процессора</p>
                            <p className="lg:text-4xl">Ryzen 5 3600</p>
                        </div>
                        <div className="bg-secondary rounded-2xl p-4 flex flex-row flex-1 justify-between lg:items-end items-center">
                            <div className="flex flex-col">
                                <p className="text-secondary-3 text-s lg:gap-0 gap-2.5m">Пинг</p>
                                <p className="lg:text-4xl inline-flex w-full justify-between">30 ms</p>
                            </div>
                            <Image src="/icons/ping.svg" alt="Ping" width={44} height={44} className="lg:w-11 lg:h-11 w-7 h-7" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="flex flex-col gap-2.5 flex-1">
                            <h3 className="font-benzin text-2xl">Настройки</h3>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between">
                                        Оперативная память
                                        <div className="bg-stroke rounded-4xl py-0.5 px-2 text-sm font-medium">
                                            30₽/Гб
                                        </div>
                                    </div>
                                    <div className="flex gap-1 text-sm">
                                        <span className="text-white/50">min</span>
                                        <Slider min={1} max={64} step={1} defaultValue={[ram]} onValueChange={(value) => setRam(value[0])} />
                                        <span className="text-white/50">max</span>
                                    </div>
                                    <p className="text-center text-white/50 lg:text-base text-sm">{ram} Гб</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between">
                                        Потоки процессора
                                        <div className="bg-stroke rounded-4xl py-0.5 px-2 text-sm font-medium">
                                            20₽/CPT
                                        </div>
                                    </div>
                                    <div className="flex gap-1 text-sm">
                                        <span className="text-white/50">min</span>
                                        <Slider min={1} max={16} step={1} defaultValue={[cpu]} onValueChange={(value) => setCpu(value[0])} />
                                        <span className="text-white/50">max</span>
                                    </div>
                                    <p className="text-center text-white/50 lg:text-base text-sm">{cpu} CPT</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between">
                                        Дисковое пространство
                                        <div className="bg-stroke rounded-4xl py-0.5 px-2 text-sm font-medium">
                                            10₽/Гб
                                        </div>
                                    </div>
                                    <div className="flex gap-1 text-sm">
                                        <span className="text-white/50">min</span>
                                        <Slider min={1} max={200} step={1} defaultValue={[disk]} onValueChange={(value) => setDisk(value[0])} />
                                        <span className="text-white/50">max</span>
                                    </div>
                                    <p className="text-center text-white/50 lg:text-base text-sm">{disk} Гб</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="flex-1 p-4 rounded-2xl flex flex-col bg-secondary lg:gap-0 gap-2.5">
                                <p className="text-sm text-secondary-3">Калькулятор стоимости</p>
                                <p className="lg:text-4xl">{dayPrice * 30}₽ / мес</p>
                            </div>
                            <div className="flex-1 p-4 rounded-2xl flex flex-col bg-secondary lg:gap-0 gap-2.5">
                                <p className="text-sm text-secondary-3">Калькулятор стоимости</p>
                                <p className="lg:text-4xl">{dayPrice}₽ / день</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CreateServer;