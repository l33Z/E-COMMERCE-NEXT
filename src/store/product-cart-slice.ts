import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product-types";

interface ProductWithCount extends Product {
  productCount: number;
}

type InitialStateTypes = {
  cartProducts: ProductWithCount[];
};

const initialState: InitialStateTypes = {
  cartProducts: [],
};

const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductWithCount>) => {
      const tempCartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
      tempCartProducts.push(action.payload);
      state.cartProducts = tempCartProducts;
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } =
  productCartSlice.actions;

export default productCartSlice.reducer;
