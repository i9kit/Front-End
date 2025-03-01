import { TypePaginationProducts} from "@/types/product.interface";
import Carousel from "@/ui/carousel/Carousel";
import { carouselItems } from "@/ui/carousel/carousel.data";
import Catalog from "@/ui/catalog/Catalog";
import { FC } from "react";


const Home: FC<TypePaginationProducts> = ({products}) => {    
    return <>
            <Carousel items={carouselItems} className="mb-10"/>
            <Catalog 
                title={'Freshed Products'} 
                products={products}
            />
    </>
}


export default Home
