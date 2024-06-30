"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "@/components/ui/icons";
import { addProductToCart } from "@/store/product-cart-slice";
import { Product } from "@/types/product-types";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ProductDetailsFooter = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(1);

  const handleIncrement = () => {
    setProductCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setProductCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleAddtoCart = () => {
    const prod = { ...product, productCount };
    dispatch(addProductToCart(prod));
  };

  return (
    <div className="flex gap-4 items-center">
      <Button variant="outline" size="icon" onClick={handleDecrement}>
        <MinusIcon className="w-4 h-4" />
      </Button>
      <span className="text-lg font-medium">{productCount}</span>
      <Button variant="outline" size="icon" onClick={handleIncrement}>
        <PlusIcon className="w-4 h-4" />
      </Button>

      <Button size="lg" className="" onClick={handleAddtoCart}>
        <ShoppingCartIcon className="w-4 h-4 mr-2" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductDetailsFooter;
