import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product-types";

export interface ProductWithCount extends Product {
  productCount: number;
}

type InitialStateTypes = {
  cartProducts: ProductWithCount[];
  cartProductsIds: number[];
};

const initialState: InitialStateTypes = {
  cartProducts: [],
  cartProductsIds: [],
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
      if (!state.cartProductsIds.includes(action.payload.id)) {
        state.cartProductsIds.push(action.payload.id);
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );

      state.cartProductsIds = state.cartProductsIds.filter(
        (id) => id !== action.payload
      );
    },

    updateProductCount: (
      state,
      action: PayloadAction<{ productId: number; newCount: number }>
    ) => {
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.id === action.payload.productId) {
          return { ...product, productCount: action.payload.newCount };
        }
        return product;
      });
    },
  },
});

export const { addProductToCart, removeProductFromCart, updateProductCount } =
  productCartSlice.actions;

export default productCartSlice.reducer;
