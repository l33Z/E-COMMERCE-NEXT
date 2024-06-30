import React from "react";
import { ModeToggle } from "./change-theme";
import Cart from "./cart";

export function Navbar() {
  return (
    <div className="flex justify-between w-full p-10">
      Z - CART
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Cart />
      </div>
    </div>
  );
}
