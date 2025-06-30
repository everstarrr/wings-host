import { signIn } from "./auth";
import {prisma} from "./prisma";
import { registerSchema } from "./schemas";
import bcrypt from "bcrypt";

export const signUp = async (formData: FormData) => {

    const email = formData.get("email");
    const password = formData.get("password") as string;
    const pwHash = await bcrypt.hash(password, 10);
    const name = formData.get("name");
    const validatedData = registerSchema.parse({ name, email, password: pwHash});

    console.log("diwa", validatedData)

    await prisma.user.create({
        data: {
            email: validatedData.email.toLowerCase(),
            password: validatedData.password,
            name: validatedData.name
        }
    })

    // await signIn("credentials", formData);
}