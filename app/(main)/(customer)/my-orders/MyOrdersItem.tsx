import { FC } from 'react'
import styles from './MyOrders.module.scss'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { convertPrice } from '@/utils/convertPrice'
import Link from 'next/link'

const MyOrdersItem: FC<{product: IProduct}> = ({product}) => {
    return (
        <div className={styles.item}>
            <Image
                src={product.images[0]}
                width={90}
                height={90}
                alt={product.name}
            />
            <div className={styles.row}>
                <div className={styles.information}>
                    <div>
                        <Link href={`/product/${product.slug}`}>
                            {product.name} 
                        </Link>
                    </div>
                    <div>
                        <Link href={`/category/${product.category.slug}`}>
                            {product.category.name} 
                        </Link>
                    </div>
                </div>
                <div className={styles.price}>
                    {convertPrice(product.price)}
                </div>
            </div>
        </div>
    )
}

export default MyOrdersItem
