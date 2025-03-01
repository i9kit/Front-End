import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import Orders from "./Orders";

export const metadata: Metadata = {
    title: 'Orders',
    ...NO_INDEX_PAGE
}

export default function OrderPage() {
    return <Orders/>
}