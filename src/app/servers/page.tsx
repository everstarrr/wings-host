import { ServersBar } from "@/components";
import { ServersSelect } from "@/components/shared/servers-select";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Servers() {

    const session = await auth();
    if (!session) redirect("/login");

    return (
        <main className="lg:w-screen lg:h-screen flex lg:flex-row flex-col lg:mt-16 mt-24 lg:bg-transparent bg-background-mobile lg:gap-0 gap-12 lg:px-0 px-8 lg:pb-0 pb-32">
            <ServersBar />
            <ServersSelect className="lg:hidden" />
            <section className="lg:p-12 grid gap-6 lg:bg-background-3 lg:flex-1 lg:grid-cols-3 grid-cols-1">
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/minecraft.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">Minecraft</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/cs2.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">CS 2</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/garrysmod.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">Garry's Mod</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/arma3.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">Arma 3</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/rust.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">Rust</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/samp.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">SA:MP</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/tf2.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">Team Fortress 2</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/unturned.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">Unturned</h3>
                    </div>
                </Link>
                <Link href="/servers/create">
                    <div className="bg-[url('/images/servers/other.png')] bg-center bg-cover bg-no-repeat aspect-[317/178] flex justify-center items-center hover:scale-105 transition-all duration-200 cursor-pointer">
                        <h3 className="text-4xl">Other</h3>
                    </div>
                </Link>
            </section>
        </main>
    )
}

export default Servers;