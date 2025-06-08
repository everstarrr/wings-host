import { AdvantageCard, ArticleCard,  } from "@/components";
import { Button } from "@/components";
import { homeData } from "@/data/homeData";
import { Headphones, RotateCcw, Settings, SlidersVertical } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col lg:gap-24 gap-12 lg:pb-0 pb-32">
      <section className="lg:bg-[url('/images/mainbg.png')] bg-center bg-cover bg-no-repeat lg:w-screen lg:h-screen relative">
        <div className="lg:absolute left-1/2 top-1/2 lg:-translate-1/2 flex flex-col lg:gap-[72px] gap-7 lg:mt-0 mt-24 text-center items-center">
          <div className="flex flex-col lg:gap-8 gap-3 lg:max-w-max max-w-[calc(100vw_-_64px)] items-center">
            <h1 className="font-benzin lg:leading-24 lg:text-6xl text-2xl lg:max-w-[814px] max-w-[calc(100vw_-_64px)] w-max">Самый стабильный игровой хостинг</h1>
            <p className="text-secondary-2 lg:text-2xl text-sm">Выбирайте надёжность. Выбирайте WINGS.</p>
          </div>
          <div className="flex gap-8">
            <Button className="lg:w-[336px] w-32">Создать сервер</Button>
            <Button className="lg:w-[336px] w-32" variant="outline">О хостинге</Button>
          </div>
        </div>
      </section>
      <section className="lg:px-24 px-8 lg:pt-12 relative">
        <div className="absolute w-[704px] h-[704px] bg-gradient-to-r opacity-20 from-[#C200C970] to-[#C900C9] blur-[200px] rounded-full top-24 -left-16 lg:block hidden" />

        <div className="flex flex-col lg:gap-24 gap-7">
          <h2 className="lg:leading-8 lg:text-5xl text-lg font-benzin text-center">Преимущества</h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-6">
            <AdvantageCard
              icon={<Settings className="lg:w-12 lg:h-12 w-5 h-5" strokeWidth={1} />}
              title="Удобная панель"
              description="Мы разработали максимальное приятную для пользователя панель управления, в которой каждый разберётся с первого раза"
            />
            <AdvantageCard
              icon={<SlidersVertical className="lg:w-12 lg:h-12 w-5 h-5" strokeWidth={1} />}
              title="Гибкие тарифы"
              description="Мы разработали максимальное приятную для пользователя панель управления, в которой каждый разберётся с первого раза"
            />
            <AdvantageCard
              icon={<Headphones className="lg:w-12 lg:h-12 w-5 h-5" strokeWidth={1} />}
              title="Быстрая поддержка"
              description="Наши специалисты всегда готовы оперативно помочь вам в случае возникновения проблемы."
            />
            <AdvantageCard
              icon={<RotateCcw className="lg:w-12 lg:h-12 w-5 h-5" strokeWidth={1} />}
              title="Резервные копии"
              description="Мы предоставляем 3 бесплатных бэкапа для обеспечения максимальной сохранности ваших данных"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:gap-16 gap-12">
        <section className="flex flex-col lg:gap-12 gap-7">
          <h2 className="lg:px-12 lg:text-[40px] text-lg lg:text-left text-center font-benzin">Популярное</h2>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 lg:border-y lg:border-y-stroke lg:px-0 px-8">
            {homeData.popular.map((item, index) =>
              <ArticleCard
                key={index}
                id={index}
                description={item.description}
                img={item.img}
                title={item.title}
                wrapperClassName="flex-1"
              />
            )}
          </div>
        </section>
        <section className="flex flex-col lg:gap-12 gap-7">
          <h2 className="lg:px-12 lg:text-[40px] text-lg lg:text-left text-center font-benzin">Статьи</h2>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 lg:border-y lg:border-y-stroke lg:px-0 px-8">
            {homeData.articles.map((item, index) =>
              <ArticleCard
                key={index}
                id={index}
                description={item.description}
                img={item.img}
                title={item.title}
                wrapperClassName="flex-1"
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
