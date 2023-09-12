import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge Tailwind CSS classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
