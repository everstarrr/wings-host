import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { loginSchema } from "@/lib/schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    providers: [Credentials({
        credentials: {
            email: {},
            password: {}
        },
        authorize: async (credentials) => {

            let user = null;
            const validatedCredentials = loginSchema.parse(credentials)
            // const pwHash = await bcrypt.hash(validatedCredentials.password, 10);

            user = await prisma.user.findUnique({
                where: {
                    email: validatedCredentials.email,
                    password: validatedCredentials.password
                }
            })

            if (!user) throw new Error("Неправильные данные");
            return user;
        }
    })],
})