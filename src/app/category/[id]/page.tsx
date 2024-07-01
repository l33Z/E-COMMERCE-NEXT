import { getProductByCategoryAndName } from "@/actions/actions";
import ProductCard from "@/components/common/product-card";
import { ProductList } from "@/types/product-types";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { productname: string };
}) {
  const catorizedProducts: ProductList = await getProductByCategoryAndName(
    params.id,
    searchParams.productname
  );

  return (
    <div>
      <div className="flex flex-wrap gap-4 mt-5 justify-center w-full">
        {catorizedProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
