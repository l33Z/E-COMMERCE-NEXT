"use client";

import reduxStore from "@/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const ReduxStoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};

export default ReduxStoreProvider;
