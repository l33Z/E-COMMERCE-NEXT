"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "@/components/ui/icons";
import {
  ProductWithCount,
  addProductToCart,
  updateProductCount,
} from "@/store/product-cart-slice";
import { RootState } from "@/store/store";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsFooter = ({ product }: { product: ProductWithCount }) => {
  console.log("product ==> ", product);

  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(product.productCount);
  const { cartProductsIds, cartProducts } = useSelector(
    (state: RootState) => state.productCart
  );
  const isInCart = cartProductsIds.includes(product.id);

  const productDetails = useMemo(() => {
    const prod = cartProducts.filter((p) => p.id === product.id);
    if (prod && prod.length > 0) {
      return prod[0];
    } else {
      setProductCount(product.productCount);
      return product;
    }
  }, [cartProducts, product]);

  const handleUpdateCount = (actionType: "inc" | "dec") => {
    if (isInCart) {
      const updatedCount =
        actionType === "inc"
          ? productDetails.productCount + 1
          : productDetails.productCount - 1;

      dispatch(
        updateProductCount({
          newCount: updatedCount,
          productId: product.id,
        })
      );
    } else {
      const updatedCount =
        actionType === "inc" ? productCount + 1 : productCount - 1;
      setProductCount(updatedCount);
    }
  };

  const handleAddtoCart = () => {
    dispatch(addProductToCart({ ...product, productCount }));
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleUpdateCount("dec")}
      >
        <MinusIcon className="w-4 h-4" />
      </Button>
      <span className="text-lg font-medium">
        {isInCart ? productDetails.productCount : productCount}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleUpdateCount("inc")}
      >
        <PlusIcon className="w-4 h-4" />
      </Button>

      <Button
        size="lg"
        className=""
        onClick={handleAddtoCart}
        disabled={isInCart}
      >
        <ShoppingCartIcon className="w-4 h-4 mr-2" />
        {isInCart ? "In Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default ProductDetailsFooter;
