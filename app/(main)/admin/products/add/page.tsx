import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import ProductAdd from "./ProductAdd";

export const metadata: Metadata = {
    title: 'Product Add',
    ...NO_INDEX_PAGE
}

export default function ProductAddPage() {
    return <ProductAdd/>
}