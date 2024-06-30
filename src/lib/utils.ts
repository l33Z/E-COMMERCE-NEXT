import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fixImageUrls(images: string[]): string[] {
  if (!images) return [];
  const joinedImages = images.join(",");
  const cleanedImages = joinedImages.replace(/['"\[\]]/g, "").split(",");
  return cleanedImages.map((url) => url.trim());
}
