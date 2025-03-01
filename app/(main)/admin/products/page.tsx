import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import Products from "./Products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Products',
    ...NO_INDEX_PAGE
}

export default function ProductPage() {
    return <Products/>
}