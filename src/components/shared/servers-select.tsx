import { serversData } from "@/data/servers-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import Link from "next/link"
import { cn } from "@/lib/utils";

interface ServersSelectProps {
    id?: string;
    className?:string;
}

export const ServersSelect = ({ id, className }: ServersSelectProps) => {
    return (
        <Select defaultValue={id}>
            <SelectTrigger className={cn("w-full rounded-none border-none bg-secondary flex py-4 px-4", !!id && "p-0 pr-4", className)}>
                <SelectValue placeholder="Выбрать сервер"/>
            </SelectTrigger>
            <SelectContent viewportClassName="gap-4.5 pb-4" className="rounded-none bg-secondary border-none">
                {serversData.map((server) => (
                    <SelectItem value={server.id} key={server.id} className="rounded-none w-full p-0 [&>span:nth-child(2)]:w-full">
                        <Link href={`/servers/${server.id}`} className={cn("flex flex-col gap-2.5 cursor-pointer w-full p-4",
                             "hover-line border-b border-b-white/10")}>
                            <p className="text-left text-2xl">{server.title}</p>
                            <p>IP/ID: {server.ip_address}/ {server.id}</p>
                        </Link>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}