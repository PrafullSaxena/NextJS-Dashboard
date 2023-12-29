import { Inter, Lusitana } from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
import {undefined} from "zod";

export const inter = Inter({ subsets: ['latin'] });
export const lusitana: NextFont = Lusitana({
    weight:['400', '700'],
    subsets: ['latin']});