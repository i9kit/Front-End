import { NO_INDEX_PAGE } from "@/constants/seo.constants"
import { ProductService } from "@/services/product/product.service"
import { Metadata } from "next"
import Checkout from "./Checkout"

export const metadata: Metadata = {
    title: 'Checkout',
    ...NO_INDEX_PAGE
}

export const revalidate = 60

async function getProducts() {
    const data = await ProductService.getAll({
        page:1,
        perPage: 20,
        ratings: ''
    })

    return data
}

export default async function CheckoutPage() {
    const data = await getProducts()
    
    return <Checkout products={data.products}/>
}

