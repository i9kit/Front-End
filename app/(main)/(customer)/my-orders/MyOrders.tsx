'use client'
import { OrderService } from "@/services/order.service"
import Heading from "@/ui/Heading"
import { convertPrice } from "@/utils/convertPrice"
import { useQuery } from "@tanstack/react-query"
import styles from './MyOrders.module.scss'
import MyOrdersItem from "./MyOrdersItem"
import { useState } from "react"
import { BsCaretRight } from "react-icons/bs"

interface IMyOrders {}

export default function MyOrders({}: IMyOrders) {
    const [openOrderId, setOpenOrderId] = useState<number | null>(null)
    
    const {data:orders} = useQuery(
        ['my orders'],
        () => OrderService.getByUserId(),
        {select: ({data}) => data}
    )

    const getStatusClass = (status: string) => {
        switch (status.toUpperCase()) {
            case 'PAYED':
                return 'bg-green'
            case 'PENDING':
                return 'bg-blue'
            default:
                return 'bg-primary'
        }
    };

    const toggleOrder = (orderId: number) => {
        setOpenOrderId(openOrderId === orderId ? null : orderId); 
    };

    return (
        <>
            <Heading>My orders</Heading>
            <section>
                {orders?.length ? (
                    orders.map(order => (
                        <div key={order.id}>
                            <div 
                                className={styles.order_header}
                            >
                                <div className={styles.information}>
                                    <div className={styles.heading}>
                                        <div>Order ID: #{order.id}</div>
                                        <div>
                                            <span>Created at: {new Date(order.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <div>{convertPrice(order.total)}</div>
                                </div>

                                <div className={styles.action}>
                                    <div className={`${styles.status} ${getStatusClass(order.status)}`}>
                                        <p>&nbsp;{order.status.toLocaleLowerCase()}&nbsp;</p>
                                    </div>
                                    <button
                                            onClick={() => toggleOrder(order.id)}
                                            className={styles.button}
                                    >
                                        <BsCaretRight size={21}/>
                                    </button> 
                                </div>                  
                        </div>  

                        {openOrderId === order.id && (
                        <div className={styles.order_list}>
                            <div className={styles.list}>
                                {order.items.map(item => (
                                    <MyOrdersItem key={item.id} product={item.product}/>)
                                )}
                            </div>
                        </div>
                        )}
                        </div>
                    ))
                ) : (
                    <div>Orders not found!</div>
                )}
            </section>
        </>
    )
}