import { Button } from "../ui";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

export const DeleteServerModal = () => {
    return (
        <Dialog>
            <DialogTrigger className="cursor-pointer focus-visible:ring-0" asChild>
                <Button font="md" variant="black" className="max-w-44">
                    Подробнее
                </Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="p-8 flex flex-col gap-6 rounded-4xl bg-secondary border-0 sm:max-w-max">
                <DialogHeader className="flex flex-col gap-6">
                    <DialogTitle className="text-4xl text-center font-normal">
                        Удаление сервера
                    </DialogTitle>
                    <DialogDescription className="text-2xl text-center font-normal">
                        Вы уверены, что хотите удалить сервер?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                    <DialogClose asChild className="w-full">
                        <Button variant="black" font="md" className="w-full">Нет, оставить сервер</Button>
                    </DialogClose>
                    <DialogClose asChild className="w-full">
                        <Button font="md" className="w-full">Да, удалить</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}