import { getProduct } from "@/actions/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "@/components/ui/icons";
import { fixImageUrls } from "@/lib/utils";
import { Product } from "@/types/product-types";
import {
  MinusIcon,
  PlusIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import ProductDetailsFooter from "./product-detials-footer";

export default async function Component({
  params,
}: {
  params: { id: number };
}) {
  const product: Product = await getProduct(params.id);

  const tempIMages = fixImageUrls(product.images);

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4 rounded overflow-hidden">
          <Image
            src={tempIMages[0]}
            alt={product.description}
            width={640}
            height={480}
            className="rounded"
          />

          <div className="hidden md:flex gap-4 items-start">
            {tempIMages.map((d) => {
              return (
                <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
                  <Image
                    src={d}
                    alt="Preview thumbnail"
                    width={100}
                    height={100}
                    className="aspect-square object-cover "
                  />

                  <span className="sr-only">View Image 1</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <Badge variant="secondary" className="w-max">
            {product.category?.name}
          </Badge>
          <h1 className="font-bold text-3xl lg:text-4xl">{product.title}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarFilledIcon className="w-5 h-5" />
              <StarFilledIcon className="w-5 h-5" />
              <StarFilledIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
              <StarIcon className="w-5 h-5" />
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.id})
            </span>
          </div>
          <div>
            <p className="mt-4">{product.description}</p>
          </div>
          <div className="text-4xl font-bold w-full">${product.price}</div>

          <ProductDetailsFooter product={{ ...product, productCount: 1 }} />
        </div>
      </div>
    </div>
  );
}
