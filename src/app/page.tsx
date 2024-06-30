import { getAllProducts } from "@/actions/actions";
import { Navbar } from "@/components/common/navbar";
import ProductCard from "@/components/common/product-card";
import { ProductList } from "@/types/product-types";

export default async function Home() {
  const allProductData: ProductList = await getAllProducts();

  return (
    <main className="min-h-screen p-10">
      <div>
        <div className="flex flex-wrap gap-4 mt-5 justify-center w-full">
          {allProductData.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </main>
  );
}
