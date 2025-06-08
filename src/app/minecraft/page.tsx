import { AdvantageCard, ArticleCard, Button, Review, ScrollArea, ScrollBar } from "@/components"
import { homeData } from "@/data/homeData"
import { Gamepad, Gamepad2, Headphones, RotateCcw, Swords } from "lucide-react"
import Image from "next/image"

export default function Minecraft() {
    return (
        <main className="flex flex-col lg:pb-0 pb-32">
            <section className="lg:bg-[url('/images/minecraftbg.png')] bg-center bg-cover bg-no-repeat lg:w-screen lg:h-screen relative lg:mt-0 mt-24 lg:px-0 px-8">
                <Image src="/images/steve.png" alt="Steve" width={450} height={651} className="pt-32 pr-16 aspect-[9/13] absolute top-0 right-0 lg:block hidden" />
                <div className="flex flex-col lg:gap-16 gap-7 lg:absolute left-32 top-48">
                    <div className="flex flex-col lg:gap-12 gap-3">
                        <h1 className="lg:leading-24 lg:text-6xl text-2xl font-benzin">MINECRAFT</h1>
                        <span className="lg:text-2xl text-sm text-secondary-2 leading-6 lg:max-w-2xl">
                            Полная свобода деятельности!<br className="lg:inline hidden" /><br />
                            Можно строить, добывать ресурсы, искать сокровища, побеждать различных опасных существ и получать ценные вещи
                        </span>
                    </div>
                    <Button className="lg:w-64">Создать сервер</Button>
                </div>
            </section>
            <section className="lg:mt-36 mt-12 flex flex-col lg:gap-16 gap-7 relative lg:px-0 px-8">
                <div className="absolute w-[704px] h-[704px] bg-gradient-to-r opacity-20 from-[#C200C970] to-[#C900C9] blur-[200px] rounded-full -top-24 -left-16 lg:block hidden" />

                <div className="flex flex-col lg:gap-10 gap-7">
                    <h2 className="lg:leading-20 font-benzin lg:text-6xl text-lg lg:text-center lg:uppercase">Что вы получаете?</h2>
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="flex gap-8 lg:px-32 lg:w-max lg:flex-row flex-col">
                            <AdvantageCard
                                icon={<Gamepad2 className="lg:w-12 lg:h-12 w-7 h-7" />}
                                title="Мини-игры"
                                description="Даём массу возможности в создании серверов с мини-играми! Наши сервера отлично поддерживают квесты, командные забеги и аркады"
                                className="lg:max-w-xl"
                            />
                            <AdvantageCard
                                icon={<Swords className="lg:w-12 lg:h-12 w-7 h-7" />}
                                title="Большая аудитория"
                                description="Наши сервера отлично справляются до 1000 пользователей на одном сервере, справляемся без лагов и задержек!"
                                className="lg:max-w-xl"
                            />
                            <AdvantageCard
                                icon={<Headphones className="lg:w-12 lg:h-12 w-7 h-7" />}
                                title="Быстрая поддержка"
                                description="Наши специалисты всегда готовы оперативно помочь вам в случае возникновения проблемы."
                                className="lg:max-w-xl"
                            />
                            <AdvantageCard
                                icon={<RotateCcw className="lg:w-12 lg:h-12 w-7 h-7" />}
                                title="Резервные копии"
                                description="Мы предоставляем 3 бесплатных бэкапа для обеспечения максимальной сохранности ваших данных"
                                className="lg:max-w-xl"
                            />
                        </div>
                    </div>
                </div>
                <Button className="lg:w-sm w-full self-center">Создать сервер</Button>
            </section>
            <section className="lg:mt-52 mt-12 flex flex-col lg:gap-12 gap-7">
                <h2 className="lg:leading-20 font-benzin lg:text-6xl text-lg lg:text-center lg:px-0 px-8 lg:uppercase">Отзывы</h2>
                <ScrollArea >
                    <div className="flex lg:gap-5 gap-3 lg:px-32 px-8">
                        <Review
                            avatar="/images/reviewAvatar.png"
                            stars={4}
                            name="Game master"
                            text="Отличный сервер! запустили 10 мини-игр и протестили на 1000 игроках! Ни одного лага, все максимально быстро работает"
                            className="w-md"
                        />
                        <Review
                            avatar="/images/reviewAvatar.png"
                            stars={4}
                            name="Game master"
                            text="Отличный сервер! запустили 10 мини-игр и протестили на 1000 игроках! Ни одного лага, все максимально быстро работает"
                            className="w-md"
                        />
                        <Review
                            avatar="/images/reviewAvatar.png"
                            stars={4}
                            name="Game master"
                            text="Отличный сервер! запустили 10 мини-игр и протестили на 1000 игроках! Ни одного лага, все максимально быстро работает"
                            className="w-md"
                        />
                        <Review
                            avatar="/images/reviewAvatar.png"
                            stars={4}
                            name="Game master"
                            text="Отличный сервер! запустили 10 мини-игр и протестили на 1000 игроках! Ни одного лага, все максимально быстро работает"
                            className="w-md"
                        />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </section>
            <section className="flex flex-col lg:gap-12 gap-7 lg:mt-16 mt-12 lg:px-0 px-8">
                <h2 className="lg:px-12 lg:text-6xl text-lg font-benzin">Статьи</h2>
                <div className="flex lg:flex-row flex-col lg:border-y lg:border-y-stroke lg:gap-0 gap-6">
                    {homeData.articles.map((item, index) =>
                        <ArticleCard
                            key={index}
                            id={index}
                            description={item.description}
                            img={item.img}
                            title={item.title}
                            wrapperClassName="flex-1"
                            className="h-full"
                        />
                    )}
                </div>
            </section>
        </main>
    )
}