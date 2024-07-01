import React from "react";
import { ModeToggle } from "./change-theme";
import Cart from "./cart";
import Link from "next/link";
import SearchProductInput from "./search-product-input";
import { Button } from "../ui/button";
import { FrameIcon, ImageIcon } from "@radix-ui/react-icons";

export function Navbar() {
  return (
    <div className="flex z-50 bg-background sticky top-0 left-0 justify-between w-full h-14 items-center px-10">
      <Link href={"/"} className="flex items-center">
        <FrameIcon className="w-5 h-5 mr-1.5" />
        ZCART
      </Link>
      <div className="flex items-center w-[350px] ">
        <SearchProductInput />
      </div>
      <div className="flex items-center gap-3">
        <Link href={"/category"}>
          <Button variant={"ghost"}>
            <ImageIcon className="w-4 h-4 mr-2" />
            Categories
          </Button>
        </Link>
        <ModeToggle />
        <Cart />
      </div>
    </div>
  );
}
