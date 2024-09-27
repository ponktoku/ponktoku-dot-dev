import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function multiFormatDate(date: Date, variant?: string): string {
  let options: Intl.DateTimeFormatOptions = {};
  switch (variant) {
    case "numeric":
      options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      break;
    case "short":
      options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
      };
      break;
    default:
      options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
      };
      break;
  }

  return new Date(date).toLocaleDateString(undefined, options);
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

export function capitalise(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitaliseAll(str: string): string {
  return str.toUpperCase();
}
