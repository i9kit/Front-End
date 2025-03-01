import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types/product.interface";
import Button from "@/ui/button/Button";
import { FC } from "react";

const AddToCartInline: FC<{product: IProduct}> = ({product})  => {
    const { addToCart, removeFromCart } = useActions()
    const { items } = useCart()

    const currentElement = items.find(
        cartItem => cartItem.product.id === product.id
    )


    return (
        <div className="mt-5">
                <Button
                    variant='orange'
                    onClick={() => 
                        currentElement
                            ? removeFromCart({id:currentElement.id})
                            : addToCart({
                                product,
                                quantity: 1,
                                price: product.price
                            })
                    }
                    size="md"
                >
                    {currentElement ? 'Remove from cart' : 'Add to cart'}
                </Button>
        </div>
    )
    
}

export default AddToCartInline