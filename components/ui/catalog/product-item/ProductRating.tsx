import { IProduct } from "@/types/product.interface";
import { FC, useState } from "react";
import { Rating } from "react-simple-star-rating";


interface IProductRating {
    product: IProduct,
    isText?: boolean
} 

const ProductRating: FC<IProductRating> = ({product, isText = false}) => {
    const [rating] = useState<number>(
        parseFloat(Math.max((
            product.reviews.reduce((acc, review) => acc + review.rating, 0) /
            product.reviews.length
        ))).toFixed(1) || 0
    )

    return (
        <div className="mb-2">
            {!!product.reviews.length && (
            <span className="mr-1">
                <Rating
                    readonly
                    initialValue={rating}
                    SVGstyle={{
                        display: 'inline-block'
                    }}
                    size={20}
                    allowFraction
                    transition
                    />
            
                <span className={'text-sm ml-1'} style={{ color: '#FFBC0D'}}> 
                    {rating}
                </span>
            </span>
            )}
            {isText && (
                <span 
                    className="text-xs">({product.reviews.length} reviews)
                </span>
            )}
        </div>
    ) 
}

export default ProductRating