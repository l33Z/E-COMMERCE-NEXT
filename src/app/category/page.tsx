import { getCategorys } from "@/actions/actions";
import { CategoryList } from "@/types/category-types";
import Image from "next/image";
import Link from "next/link";

export default async function Component() {
  const categorys: CategoryList = await getCategorys();

  console.log("categorys ==> ", categorys);

  return (
    <section className="w-full h-full">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Product Categories
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse through our wide range of product categories and find the
              perfect items for your needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categorys.map((d) => {
            return (
              <Link
                href={`/category/${d.id}`}
                className="bg-background rounded-lg shadow-lg overflow-hidden w-full max-w-md group"
              >
                <div className="relative">
                  <Image
                    src={d.image}
                    alt="Product Image"
                    width={600}
                    height={300}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">{d.name}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
