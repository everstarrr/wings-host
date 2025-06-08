import { Button, Input } from "@/components";
import { redirect } from "next/navigation";
import { signUp } from "@/lib/actions";
import { auth } from "@/lib/auth";


export default async function Register() {

    const session = await auth();
    if (!!session) redirect("/servers");

    return (
        <main className="w-screen h-screen flex flex-col lg:gap-20 gap-8 pt-16 items-center justify-center lg:px-0 px-8">
            <h1 className="lg:text-5xl text-2xl font-benzin">РЕГИСТРАЦИЯ</h1>
            <form
                className="flex flex-col gap-6 items-center lg:w-auto w-full"
                action={async (formData: FormData) => {
                    "use server"
                    if (formData.get("confirm_password") === formData.get("password")) {
                        try {
                            await signUp(formData);
                            redirect("/servers");
                        } catch { }
                    }
                }}
            >
                <div className="flex flex-col gap-4 lg:w-xl w-full">
                    <Input
                        name="name"
                        placeholder="Имя"
                        required
                    />

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
                    />

                    <Input
                        name="confirm_password"
                        placeholder="Повторите пароль"
                        type="password"
                        required
                    />

                </div>
                <Button
                    type="submit"
                    font="md"
                    className="lg:w-sm w-48 mt-12"
                >
                    Зарегистрироваться
                </Button>
            </form>
        </main>
    )
}