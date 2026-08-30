import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...classes: string[]) {
    
    return twMerge( clsx(classes))
}


export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}