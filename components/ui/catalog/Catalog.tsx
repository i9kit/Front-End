'use client'
import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import ProductItem from "./product-item/ProductItem";
import Loader from "../Loader";
import Heading from "../Heading";


interface ICatalog {
    products: IProduct[]
    isLoading?: boolean
    title?: string
}

const Catalog: FC<ICatalog> = ({products, isLoading, 
    title}) => {
    
    if (isLoading) return <Loader />

    return (
        <section>
            {title && <Heading className="mb-5">{title}</Heading>}
            {products.length ? (
            <>
                <div className="grid grid-cols-4 gap-10">
                    {products.map(product => (
                    <ProductItem key={product.id} product={product}/>))
                    }
                </div>
            </>
            ):(
                <div>There are no products</div>
            )}
        </section>
    )
}

export default Catalog