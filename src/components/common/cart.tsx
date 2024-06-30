"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "../ui/icons";
import { Badge } from "../ui/badge";
import { ArrowRightIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { fixImageUrls } from "@/lib/utils";
import Image from "next/image";
import { RootState } from "@/store/store"; // Adjust the path to your store
import { Product } from "@/types/product-types";
import { removeProductFromCart } from "@/store/product-cart-slice";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.productCart.cartProducts
  );
  console.log("cartProducts ==> ", cartProducts);

  const handleRemoveItem = (productId: number) => {
    dispatch(removeProductFromCart(productId));
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="sr-only">Open Cart</span>
          {cartProducts.length > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground">
              {cartProducts.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <h2 className="text-lg font-semibold">Cart</h2>
          </SheetTitle>
          <SheetDescription className="h-screen p-2">
            {cartProducts.length === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 min-h-full">
                <ShoppingCartIcon className="w-12 h-12 text-muted-foreground" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            )}
            {cartProducts.length > 0 && (
              <div className="flex-1 overflow-auto h-3/4 ">
                <ul className="grid gap-4">
                  {cartProducts.map((product) => {
                    const tempImages = fixImageUrls(product.images);
                    return (
                      <li
                        key={product.id}
                        className="grid grid-cols-[80px_1fr_auto] mt-2 items-center gap-4 pb-4"
                      >
                        <div className="relative">
                          <Image
                            src={tempImages[0]}
                            alt="Preview thumbnail"
                            width={80}
                            height={80}
                            className="rounded-md object-cover"
                          />

                          <Button
                            size={"icon"}
                            className="absolute -top-2 -right-2 z-10  w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
                            onClick={() => handleRemoveItem(product.id)}
                          >
                            x
                          </Button>
                        </div>
                        <div className="grid gap-1">
                          <h3 className="font-medium">{product.title}</h3>
                          <p className="text-muted-foreground text-sm">
                            {product.category.name}
                          </p>
                        </div>
                        <div className="grid gap-2 text-right">
                          <p className="font-medium">${product.price}</p>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                              <MinusIcon className="w-4 h-4" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span>{product.productCount}</span>
                            <Button variant="ghost" size="icon">
                              <PlusIcon className="w-4 h-4" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>

        {cartProducts.length > 0 && (
          <SheetFooter>
            <div className="mt-auto border-t pt-6 w-full">
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground">Total</p>
                <p className="font-medium">$59.97</p>
              </div>
              <div className="grid gap-2">
                <Button className="flex items-center justify-center">
                  <ArrowRightIcon className="mr-2 h-4 w-4" />
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
