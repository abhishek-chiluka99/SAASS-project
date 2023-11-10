import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    // this twMerge helps to merge the CSS properties into one
    // for example: if we have px-2 and py-2 it can be merge into one as p-2
    // helps to minimize the css values.
    return twMerge(clsx(inputs))
}