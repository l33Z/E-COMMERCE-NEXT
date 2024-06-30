import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import productCartReducer from "./product-cart-slice";

const loggerMiddleware = createLogger({
  level: "info",
  collapsed: true,
  predicate: () => true,
});

export const store = configureStore({
  reducer: {
    productCart: productCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
