import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import Reviews from "./Reviews";

export const metadata: Metadata = {
    title: 'Reviews',
    ...NO_INDEX_PAGE
}

export default function ReviewPage() {
    return <Reviews/>
}