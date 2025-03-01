import { instance } from "@/api/api.interceptor"
import { IProduct, TypePaginationProducts } from "@/types/product.interface"
import { PRODUCTS,  TypeProductData, TypeProductDataAdd, TypeProductDataFilters } from "./product.types"

export const ProductService = {
    async getAll(queryData = {} as TypeProductDataFilters) {
        const {data} = await instance<TypePaginationProducts> ({
            url: PRODUCTS,
            method: 'GET',
            params: queryData
        })

        return data
        
    },
    
    async getSimilar(productId: string | number) {
        return instance<IProduct[]> ({
            url: `${PRODUCTS}/similar/${productId}`,
            method: 'GET'
        })
    },

    async getBySlug(slug: string) {
        const {data} = await instance<IProduct> ({
            url: `${PRODUCTS}/by-slug/${slug}`,
            method: 'GET'
        })

        return data
    },

    async getByCategory(categorySlug: string) {
        return instance<IProduct[]> ({
            url: `${PRODUCTS}/by-category/${categorySlug}`,
            method: 'GET'
        })
    },

        
    async getById(id: string | number) {
        return instance<IProduct[]> ({
            url: `${PRODUCTS}/${id}`,
            method: 'GET'
        })
    },

    async create(data:TypeProductDataAdd) {
        return instance<IProduct> ({
            url: PRODUCTS,
            method: 'POST',
            data
        })
    },
    async update(id: string | number, data:TypeProductData) {
        return instance<IProduct> ({
            url: `${PRODUCTS}/${id}`,
            method: 'PUT',
            data
        })
    },
    async delete(id: string | number) {
        return instance<IProduct> ({
            url: `${PRODUCTS}/${id}`,
            method: 'DELETE',
        })
    },

}


