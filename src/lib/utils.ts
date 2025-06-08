import { clsx, type ClassValue } from "clsx"
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { twMerge } from "tailwind-merge"

type Options<T> = {
  actionFn: () => Promise<T>;
  successMessage?: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const executeAction = async <T>({
  actionFn,
  successMessage
}: Options<T>): Promise<{success: boolean, message?: string}> => {
  try {
    await actionFn();

    return {
      success: true,
      message: successMessage
    }
  } catch (error) {
    if (isRedirectError(error)) throw error;

    return {
      success: false,
      message: "Ошибка"
    }
  }
}