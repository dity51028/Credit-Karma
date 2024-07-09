import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeStyles = (...input: ClassValue[]): string => {
  return twMerge(clsx(input));
};
