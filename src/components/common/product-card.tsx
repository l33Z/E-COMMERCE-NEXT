import { Card } from "@/components/ui/card";
import { Product } from "@/types/product-types";
import Image from "next/image";
import { Button } from "../ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { fixImageUrls } from "@/lib/utils";
import ProductCardFooterBtn from "./product-card-footer-btn";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const tempIMages = fixImageUrls(product.images);

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
      <div className="relative">
        <Link href={`/product/${product.id}`}>
          <Image
            src={tempIMages[0]}
            alt="Product Image"
            width={640}
            height={480}
            className="object-cover"
          />
        </Link>
        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-background px-3 py-1 text-sm font-medium">
          <StarFilledIcon className="h-4 w-4 fill-primary" />
          <span>4.8</span>
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {product.category.name}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{product.title.slice(0, 15)}</h3>
        <p className="mt-2 text-muted-foreground">
          {product.description.slice(0, 100)}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <ProductCardFooterBtn product={product} />
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
