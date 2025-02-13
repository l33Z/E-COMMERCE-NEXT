import { getAllProducts, getProductByName } from "@/actions/actions";
import ProductCard from "@/components/common/product-card";
import { ProductList } from "@/types/product-types";

export default async function Home({
  searchParams,
}: {
  searchParams: { productname: string };
}) {
  const allProductData: ProductList = await getProductByName(
    searchParams.productname
  );

  return (
    <div>
      <div className="flex flex-wrap gap-4 mt-5 justify-center w-full">
        {allProductData.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
