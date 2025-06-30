import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/lib/schemas";
import bcrypt from "bcrypt";
// import { hashPassword } from "./utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;
          const { email, password } = loginSchema.parse(credentials);
          const pwHash = await bcrypt.hash(password, 10);

          user = await prisma.user.findUnique({
            where: {
              email,
              password: pwHash,
            },
          });

          if (!user) throw new Error("Неправильные данные");
          return user;
        } catch (e){
          return null;
        }
      },
    }),
  ],
});
