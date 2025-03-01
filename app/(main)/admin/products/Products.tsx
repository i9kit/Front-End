'use client'
import { FC } from "react";
import { useAdminProducts } from "./useAdminProducts";
import Heading from "@/ui/Heading";
import AdminList from "@/ui/admin/admin-list/AdminList";
import Button from "@/ui/button/Button";
import { useRouter } from "next/navigation";


const Products: FC = () => {
    const { data, isFetching, mutate } = useAdminProducts()

    const {push} = useRouter()
    return (
        <>
            <Heading className='mb-7'>Products</Heading>
            <AdminList
              isLoading={isFetching}
              listItems={data}
              removeHandler={mutate} 
            />
            <Button 
                variant="white" 
                size="md"
                onClick={() => push('/admin/products/add')}
                className="mt-5"
            >
                    Add Product
            </Button>
        </>
    )
}

export default Products