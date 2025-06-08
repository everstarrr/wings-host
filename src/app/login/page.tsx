import { Button, Input } from "@/components";
import { auth, signIn } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login() {

    const session = await auth();
    if (!!session) redirect("/servers");

    return (
        <main className="w-screen h-screen flex flex-col lg:gap-20 gap-8 pt-16 items-center justify-center lg:px-0 px-8">
            <h1 className="lg:text-5xl text-2xl font-benzin">ВХОД</h1>
            <form
                className="flex flex-col gap-6 items-center lg:w-auto w-full"
                action={async (formData: FormData) => {
                    "use server";
                    await signIn("credentials", formData)
                }}
            >
                <div className="flex flex-col gap-4 lg:w-xl w-full">

                    <Input
                        name="email"
                        placeholder="Почта"
                        type="email"
                        required
                        autoComplete="email"
                    />

                    <Input
                        name="password"
                        placeholder="Пароль"
                        type="password"
                        required
                        autoComplete="current-password"
                    />

                </div>
                <Button type="submit" font="md" className="lg:w-sm w-48 mt-12">Войти</Button>
                <p>Нет аккаунта? <Link href="/register" className="cursor-pointer underline">Регистрация</Link></p>
            </form>
        </main>
    )
}