import { serversData } from "@/data/servers-data"
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ServerBarProps {
    id?: string;
}

export const ServersBar = ({ id }: ServerBarProps) => {

    return (
        <section className="w-sm bg-secondary overflow-y-scroll no-scrollbar lg:block hidden">
            <div className="w-full p-4 flex flex-col gap-5">
                {serversData.map((server) => (
                    <Link href={`/servers/${server.id}`} key={server.id} className={cn("p-4 flex flex-col gap-2.5 cursor-pointer",
                        id === server.id ? "rounded-2xl border border-white/30" : "hover-line border-b border-b-white/10")}>
                        <p className="text-2xl">{server.title}</p>
                        <p>IP/ID: {server.ip_address}/ {server.id}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}