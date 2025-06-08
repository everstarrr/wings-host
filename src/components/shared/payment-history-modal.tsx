import { History } from "lucide-react";
import { Button } from "../ui";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

export const PaymentHistoryModal = () => {
    return (
        <Dialog>
            <DialogTrigger className="cursor-pointer">
                <History className="lg:w-12 lg:h-12 w-7 h-7" />
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="p-8 flex flex-col gap-6 rounded-4xl bg-secondary border-0">
                <DialogHeader>
                    <DialogTitle className="text-4xl text-center font-normal">
                        История платежей
                    </DialogTitle>
                </DialogHeader>
                <div className="flex justify-between items-center">
                    <div className="text-2xl flex flex-col gap-1">
                        <p className="text-secondary-4">Tinkoff</p>
                        <p>Пополнение баланса</p>
                    </div>
                    <p className="text-green-accent">+ 500 ₽</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-2xl flex flex-col gap-1">
                        <p className="text-secondary-4">Tinkoff</p>
                        <p>Оплата сервера</p>
                    </div>
                    <p className="text-green-accent">- 200 ₽</p>
                </div>
                <DialogClose className="w-full">
                    <Button asChild font="md" className="w-full">Хорошо</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}