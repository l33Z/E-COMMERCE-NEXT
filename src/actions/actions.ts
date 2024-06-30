"use server";

import { API_BASE_URL } from "@/constanst";

export async function getAllProducts() {
  try {
    const response = await fetch(API_BASE_URL + "?offset=0&limit=40");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error ==> ", error);
    return [];
  }
}

export async function getProduct(id: number) {
  try {
    const response = await fetch(API_BASE_URL + "/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error ==> ", error);
    return {};
  }
}
