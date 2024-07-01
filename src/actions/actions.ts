"use server";

import {
  API_BASE_URL,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_CATEGORYS,
} from "@/constanst";

const fetchJson = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error ==> ", error);
    return null;
  }
};

export const getAllProducts = async () => {
  const data = await fetchJson(`${API_BASE_URL}?offset=0&limit=40`);
  return data ?? [];
};

export const getProduct = async (id: number) => {
  const data = await fetchJson(`${API_BASE_URL}/${id}`);
  return data ?? {};
};

export const getCategorys = async () => {
  const data = await fetchJson(GET_PRODUCT_CATEGORYS);
  return data ?? [];
};

export const getProductByCategory = async (categoryId: string) => {
  const data = await fetchJson(
    GET_PRODUCT_BY_CATEGORY.replace("{categoryId}", categoryId)
  );
  return data ?? [];
};

export const getProductByName = async (productName: string) => {
  if (!productName) {
    return await getAllProducts();
  }
  const data = await fetchJson(
    `${API_BASE_URL}?offset=0&limit=40&title=${productName}`
  );
  return data ?? [];
};

export const getProductByCategoryAndName = async (
  categoryId: string,
  productName: string
) => {
  const url = productName
    ? `${GET_PRODUCT_BY_CATEGORY.replace(
        "{categoryId}",
        categoryId
      )}&title=${productName}`
    : GET_PRODUCT_BY_CATEGORY.replace("{categoryId}", categoryId);
  const data = await fetchJson(url);
  return data ?? [];
};
