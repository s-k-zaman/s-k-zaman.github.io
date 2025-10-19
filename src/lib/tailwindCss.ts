import { clsx, type ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassArray) {
  return twMerge(clsx(classes));
}

export function classNames(...classes: ClassArray) {
  return twMerge(clsx(classes));
}
