import { Button } from "@/components";
import { PaymentHistoryModal } from "@/components/shared/payment-history-modal";
import { financeData } from "@/data/profileData";
import { serversData } from "@/data/servers-data";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Profile() {

    // const session = await auth();
    // if (!session) redirect("/login");

    return (
        <main className="py-12 lg:px-32 px-8 flex flex-col gap-12 mt-16 lg:bg-background-3 bg-background-mobile">
            <section className="flex flex-col gap-6">
                <h1 className="lg:text-6xl text-xl lg:font-manrope font-benzin">Профиль</h1>
                <div className="flex gap-6 items-center">
                    <Image src="/images/avatar.png" alt="Avatar" width={96} height={96} className="w-24 h-24 rounded-full" />
                    <div className="flex flex-col gap-2.5">
                        <p className="lg:text-4xl">Виктор Дудка</p>
                        <p className="lg:text-base text-sm">С 12.12.24</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <h2 className="lg:text-5xl text-lg lg:font-manrope font-benzin">Финансы</h2>
                    <div className="lg:flex hidden gap-6 items-center">
                        <Button font="md">Пополнить депозит</Button>
                        <PaymentHistoryModal />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5">
                    {financeData.map((item, index) => (
                        <div key={index} className="p-4 flex flex-col flex-1 bg-secondary rounded-2xl lg:gap-0 gap-2.5">
                            <p className="text-sm text-secondary-3">{item.title}</p>
                            <p className="lg:text-4xl">{item.value}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 lg:hidden justify-center">
                    <Button font="md">Пополнить депозит</Button>
                    <PaymentHistoryModal />
                </div>
            </section>
            <section className="flex flex-col gap-6">
                <h2 className="lg:text-5xl text-lg lg:font-manrope font-benzin">Серверы</h2>
                <div className="lg:p-4 p-0.5 flex flex-col gap-5 bg-secondary lg:rounded-2xl">
                    {serversData.map((server) => (
                        <Link
                            key={server.id}
                            href={`/servers/${server.id}`}
                            className="flex flex-col p-4 gap-2.5 w-full border-b border-white/10 hover-line cursor-pointer"
                        >
                            <p className="lg:text-2xl text-xl">{server.title}</p>
                            <p className="lg:text-base text-sm">IP/ID: {server.ip_address}/ {server.id}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Profile;