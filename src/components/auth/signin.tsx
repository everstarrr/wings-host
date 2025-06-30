import Link from "next/link";
import { Button, Input } from "../ui";
import { signIn } from "@/lib/auth";

export const SignIn = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
      className="flex flex-col gap-6 items-center lg:w-auto w-full"
    >
      <div className="flex flex-col gap-4 lg:w-xl w-full">
        <Input placeholder="Почта" type="email" name="email" />
        <Input placeholder="Пароль" type="password" name="password" />
      </div>
      <Button type="submit" font="md" className="lg:w-sm w-48 mt-12">
        Войти
      </Button>
      <p>
        Нет аккаунта?{" "}
        <Link href="/register" className="cursor-pointer underline">
          Регистрация
        </Link>
      </p>
    </form>
  );
};
