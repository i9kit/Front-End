import { page_product_quality, page_quality } from "@/config/url.config";
import Heading from "@/ui/Heading";
import Link from "next/link";

const PAGINATION = `&page=${page_quality}&perPage=${page_product_quality}`

export default function NotFound() {
    return (
        <>
            <Heading>Not Found</Heading>
            <p>Could not find requested resourse</p>
            <p>
                View{' '}
                <Link href='/explorer?page=1&perPage=4' className="text-primary">
                    All products
                </Link>
            </p>
        </>
    )
}