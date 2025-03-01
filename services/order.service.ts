import { instance } from "@/api/api.interceptor"
import { IOrder } from "@/types/order.interface"

const ORDERS = 'orders'

enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
}

type TypeData = {
    status?: EnumOrderStatus
    items: {
        productId: number
        price: number
        quantity: number
    }[]
}

export const OrderService = {
    async getAll() {
        return instance<IOrder[]> ({
            url: ORDERS,
            method: 'GET'
        })
    },

    async getByUserId() {
        return instance<IOrder[]>({
            url: `${ORDERS}/by-user`,
            method: 'GET'
        })
    },

    async place(data: TypeData){
        return instance<{confirmation: {confirmation_url: string}}> ({
            url: ORDERS,
            method: 'POST',
            data
        })
    }
}

