"use client";
import React from "react";
import { Button } from "../ui/button";
import { Product } from "@/types/product-types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addProductToCart } from "@/store/product-cart-slice";

const ProductCardFooterBtn = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { cartProductsIds } = useSelector(
    (state: RootState) => state.productCart
  );

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...product, productCount: 1 }));
  };

  return (
    <Button
      size="sm"
      disabled={cartProductsIds.includes(product.id)}
      onClick={handleAddToCart}
    >
      {cartProductsIds.includes(product.id) ? "In Cart" : "Add to Cart"}
    </Button>
  );
};

export default ProductCardFooterBtn;
