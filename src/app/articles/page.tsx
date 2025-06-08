import { ArticleCard } from "@/components";
import { homeData } from "@/data/homeData";

export default function Articles() {
    return (
        <main className="flex flex-col lg:mt-16 mt-24 lg:pb-0 pb-32">
            <section className="flex flex-col lg:px-0 px-8 lg:gap-0 gap-10">
                <h1 className="lg:text-4xl lg:leading-10 text-2xl font-benzin lg:p-12">Статьи</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 border-t border-t-stroke lg:gap-0 gap-6">
                    {homeData.articles.map((item, index) =>
                        <ArticleCard
                            key={index}
                            id={index}
                            description={item.description}
                            img={item.img}
                            title={item.title}
                            className="lg:border-b border-b-stroke h-full"
                        />
                    )}
                    {homeData.articles.map((item, index) =>
                        <ArticleCard
                            key={index}
                            id={index}
                            description={item.description}
                            img={item.img}
                            title={item.title}
                            className="lg:border-b border-b-stroke h-full"
                        />
                    )}
                </div>
            </section>
        </main>
    )
}